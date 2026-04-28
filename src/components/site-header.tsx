import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import logoImage from "@/assets/aquarq-logo.jpg";
import { whatsappLink } from "@/lib/aquarq";

export function LogoMark({ variant = "default" }: { variant?: "default" | "light" }) {
  const textColor = variant === "light" ? "text-background" : "text-foreground";
  const subColor =
    variant === "light" ? "text-background/72" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-3" aria-label="AQUARQ">
      <img
        src={logoImage}
        alt="Logo AQUARQ"
        width={48}
        height={48}
        className="h-12 w-12 rounded-full bg-background object-contain p-1 shadow-soft"
      />
      <div className="leading-none">
        <div className={`text-xl font-black tracking-normal ${textColor}`}>AQUARQ</div>
        <div className={`text-xs font-semibold uppercase tracking-[0.18em] ${subColor}`}>
          Empresa Constructora
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/70 bg-background/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-md">
          <LogoMark />
        </Link>
        <div className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            className="transition hover:text-foreground"
          >
            Inicio
          </Link>
          <Link
            to="/obras"
            activeProps={{ className: "text-foreground" }}
            className="transition hover:text-foreground"
          >
            Obras
          </Link>
          <Link
            to="/contacto"
            activeProps={{ className: "text-foreground" }}
            className="transition hover:text-foreground"
          >
            Contacto
          </Link>
        </div>
        <a
          href={whatsappLink("Hola AQUARQ, quiero solicitar un presupuesto.")}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-sun px-5 py-2.5 text-sm font-black text-sun-foreground shadow-soft transition hover:-translate-y-0.5 md:inline-flex"
        >
          WhatsApp
        </a>
        <Menu className="h-6 w-6 text-foreground md:hidden" aria-hidden="true" />
      </nav>
    </header>
  );
}
