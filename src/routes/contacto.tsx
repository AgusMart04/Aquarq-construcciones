import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { z } from "zod";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { CtaButton } from "@/components/cta-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CALL_PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  callLink,
  whatsappLink,
} from "@/lib/aquarq";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — AQUARQ Constructora en Asunción" },
      {
        name: "description",
        content:
          "Solicitá presupuesto o asesoramiento a AQUARQ. WhatsApp, llamadas y formulario de contacto en Asunción, Paraguay.",
      },
      { property: "og:title", content: "Contactá a AQUARQ" },
      {
        property: "og:description",
        content: "Estamos para escuchar tu proyecto. Escribinos por WhatsApp, llamanos o usá el formulario.",
      },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Tu nombre es muy corto")
    .max(80, "Máximo 80 caracteres"),
  email: z
    .string()
    .trim()
    .email("Email inválido")
    .max(120, "Máximo 120 caracteres")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(6, "Teléfono muy corto")
    .max(30, "Máximo 30 caracteres")
    .regex(/^[0-9+\s()-]+$/, "Solo números, espacios y + - ( )"),
  project: z
    .string()
    .trim()
    .min(2, "Indicanos qué querés construir")
    .max(80, "Máximo 80 caracteres"),
  message: z
    .string()
    .trim()
    .min(10, "Contanos un poco más sobre tu proyecto")
    .max(1000, "Máximo 1000 caracteres"),
});

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  project: "",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof ContactFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormState, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const data = result.data;
    const subject = `Consulta web: ${data.project} — ${data.name}`;
    const bodyLines = [
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Proyecto: ${data.project}`,
      "",
      "Mensaje:",
      data.message,
    ].filter(Boolean);
    const body = bodyLines.join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="px-4 pb-10 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-primary">
            Contacto
          </p>
          <h1 className="text-balance text-4xl font-black sm:text-6xl">
            Conversemos sobre tu próximo proyecto
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Escribinos por WhatsApp, llamanos o completá el formulario y te
            respondemos a la brevedad. Atención personalizada en horario de oficina.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Tarjetas de contacto directo */}
          <div className="space-y-4">
            <a
              href={whatsappLink("Hola AQUARQ, quiero solicitar un presupuesto.")}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#1ebe57]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  WhatsApp (solo mensajes)
                </p>
                <p className="mt-1 text-2xl font-black">{WHATSAPP_DISPLAY}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Escribir ahora <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>

            <a
              href={callLink}
              className="group flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/12 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Llamadas (solo voz)
                </p>
                <p className="mt-1 text-2xl font-black">{CALL_PHONE_DISPLAY}</p>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Llamar ahora <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-sun/30 text-sun-foreground">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="mt-1 break-all text-lg font-black">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-card p-6 shadow-soft">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Ubicación
                </p>
                <p className="mt-1 text-lg font-black">{CONTACT_LOCATION}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Lunes a viernes, horario de oficina.
                </p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <h2 className="text-2xl font-black sm:text-3xl">Enviar por email</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Al enviar, se abrirá tu programa de email con el mensaje listo para
              despachar a {CONTACT_EMAIL}.
            </p>

            <div className="mt-6 grid gap-4">
              <div>
                <Label htmlFor="name" className="font-bold">
                  Nombre y apellido <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  className="mt-2 h-11"
                  placeholder="Tu nombre"
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <p className="mt-1 text-xs font-semibold text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="phone" className="font-bold">
                    Teléfono <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    className="mt-2 h-11"
                    placeholder="+595 ..."
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs font-semibold text-destructive">
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="font-bold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    className="mt-2 h-11"
                    placeholder="opcional"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-semibold text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="project" className="font-bold">
                  ¿Qué querés construir? <span className="text-primary">*</span>
                </Label>
                <Input
                  id="project"
                  name="project"
                  value={form.project}
                  onChange={update("project")}
                  className="mt-2 h-11"
                  placeholder="Ej: Casa, piscina, ampliación..."
                  aria-invalid={!!errors.project}
                />
                {errors.project && (
                  <p className="mt-1 text-xs font-semibold text-destructive">
                    {errors.project}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="font-bold">
                  Contanos sobre tu proyecto <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update("message")}
                  className="mt-2 min-h-32"
                  placeholder="Ubicación del terreno, metros aproximados, plazos en mente..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="#" external={false}>
                {/* el botón visual; el submit real lo dispara el form */}
                <button type="submit" className="inline-flex items-center gap-2">
                  Enviar por email <ArrowRight className="h-5 w-5" />
                </button>
              </CtaButton>
              {sent && (
                <p className="text-sm font-semibold text-primary">
                  Abrimos tu cliente de email — si no apareció, revisá el bloqueo de pop-ups.
                </p>
              )}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              ¿Preferís otra vía? También podés escribirnos directo por{" "}
              <a
                href={whatsappLink("Hola AQUARQ, quiero solicitar presupuesto.")}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}
