import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import { LogoMark } from "@/components/site-header";
import {
  obraCategories,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
} from "@/lib/aquarq";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-5">
            <LogoMark variant="light" />
            <p className="max-w-xs text-sm text-background/72">
              Construcciones en general en Asunción, Paraguay. Casas, piscinas,
              quinchos y ampliaciones.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de AQUARQ"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/10 text-background transition hover:-translate-y-0.5 hover:bg-sun hover:text-sun-foreground"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_FACEBOOK}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de AQUARQ"
                className="grid h-10 w-10 place-items-center rounded-full bg-background/10 text-background transition hover:-translate-y-0.5 hover:bg-sun hover:text-sun-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-background/72">
            {obraCategories.map((cat) => (
              <Link
                key={cat.slug}
                to="/obras/$category"
                params={{ category: cat.slug }}
                className="transition hover:text-background"
              >
                {cat.title}
              </Link>
            ))}
            <Link to="/obras" className="transition hover:text-background">
              Obras
            </Link>
            <Link to="/contacto" className="transition hover:text-background">
              Contacto
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 text-center text-xs text-background/60">
          © {year} AQUARQ Empresa Constructora. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
