import { useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, Ruler, Tag } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CtaButton } from "@/components/cta-button";
import { whatsappLink } from "@/lib/aquarq";
import type { Obra } from "@/lib/obras-data";

type Props = {
  obra: Obra | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ObraDetailDialog({ obra, open, onOpenChange }: Props) {
  const [activeImage, setActiveImage] = useState(0);

  if (!obra) return null;

  const cover = obra.images[activeImage] ?? obra.images[0];

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setActiveImage(0);
      }}
    >
      <DialogContent className="flex max-h-[92vh] max-w-4xl flex-col gap-0 overflow-hidden p-0">
        <div className="flex-1 overflow-y-auto">
        {/* GALERÍA */}
        <div className="relative aspect-[16/10] max-h-[45vh] w-full overflow-hidden bg-muted">
          <img
            src={cover}
            alt={obra.name}
            className="h-full w-full object-cover"
          />
          {obra.status && (
            <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-black uppercase tracking-wider text-foreground shadow-soft backdrop-blur">
              {obra.status}
            </span>
          )}
        </div>

        {obra.images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto px-6 pt-4">
            {obra.images.map((img, i) => (
              <button
                key={img + i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                  activeImage === i
                    ? "border-primary"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8">
          <DialogHeader className="text-left">
            <DialogTitle className="text-balance text-3xl font-black sm:text-4xl">
              {obra.name}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {obra.shortDescription}
            </DialogDescription>
          </DialogHeader>

          {/* META */}
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-warm px-3 py-1.5 text-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> {obra.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-warm px-3 py-1.5 text-foreground">
              <Ruler className="h-3.5 w-3.5 text-primary" /> {obra.size}
            </span>
            {obra.year && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-warm px-3 py-1.5 text-foreground">
                <CalendarDays className="h-3.5 w-3.5 text-primary" /> {obra.year}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-warm px-3 py-1.5 capitalize text-foreground">
              <Tag className="h-3.5 w-3.5 text-primary" /> {obra.category}
            </span>
          </div>

          {/* DESCRIPCIÓN */}
          <div className="mt-6">
            <h3 className="text-lg font-black">Sobre la obra</h3>
            <p className="mt-2 leading-7 text-foreground/85">
              {obra.longDescription}
            </p>
          </div>

          {/* FEATURES */}
          {obra.features.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-black">Detalles del proyecto</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {obra.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm font-semibold"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CtaButton
              href={whatsappLink(
                `Hola AQUARQ, me gustó la obra "${obra.name}" (${obra.location}) y quiero algo similar. ¿Podemos coordinar un presupuesto?`,
              )}
            >
              Quiero algo así <ArrowRight className="h-5 w-5" />
            </CtaButton>
          </div>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
