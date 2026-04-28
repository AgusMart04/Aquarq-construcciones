import type React from "react";

export function CtaButton({
  children,
  href,
  variant = "primary",
  external,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const isExternal = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={
        variant === "primary"
          ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-lift transition duration-300 hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-primary/25"
          : "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-bold text-foreground shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-primary/20"
      }
    >
      {children}
    </a>
  );
}
