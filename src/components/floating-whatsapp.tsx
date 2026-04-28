import { whatsappLink } from "@/lib/aquarq";

// Icono inline de WhatsApp (oficial simplificado) — más reconocible que un teléfono genérico.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.305-.502 2.62-1.32.13-.33.13-.616.085-.93-.058-.493-1.103-.703-1.69-1.005zM16.345 27.413a11.193 11.193 0 0 1-5.654-1.5l-.402-.243-4.196 1.103 1.117-4.083-.258-.43a11.024 11.024 0 0 1-1.704-5.886c0-6.09 4.96-11.05 11.067-11.05a11 11 0 0 1 7.81 3.234 10.974 10.974 0 0 1 3.227 7.832c0 6.092-5.043 11.023-11.07 11.023zm9.397-20.494c-2.512-2.516-5.853-3.892-9.41-3.892C9.04 3.027 3.103 8.961 3.1 16.16c0 2.302.6 4.546 1.747 6.526l-1.847 6.737 6.91-1.806a13.247 13.247 0 0 0 6.317 1.605h.014c7.295 0 13.247-5.937 13.25-13.235.012-3.527-1.394-6.84-3.748-9.353z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hola AQUARQ, quiero solicitar presupuesto.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a AQUARQ por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
