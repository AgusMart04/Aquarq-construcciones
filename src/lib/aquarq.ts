// Constantes y helpers compartidos para la web de AQUARQ.

// WhatsApp ÚNICAMENTE — el otro número no recibe mensajes.
export const WHATSAPP_PHONE = "595974450704";
export const WHATSAPP_DISPLAY = "+595 974 450704";

// Llamadas ÚNICAMENTE — este número no recibe WhatsApp.
export const CALL_PHONE_E164 = "+595971602085";
export const CALL_PHONE_DISPLAY = "+595 971 602085";

export const CONTACT_EMAIL = "aquarq.construcciones@gmail.com";
export const CONTACT_LOCATION = "Asunción, Paraguay";

// Redes sociales (placeholders — actualizar con URLs reales del cliente).
export const SOCIAL_INSTAGRAM = "https://www.instagram.com/aqu.arq/";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/profile.php?id=61584418511826";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

export const callLink = `tel:${CALL_PHONE_E164}`;

export type ObraCategory = "casas" | "piscinas" | "quinchos" | "ampliaciones";

export const obraCategories: Array<{
  slug: ObraCategory;
  title: string;
  short: string;
  intent: string;
}> = [
  {
    slug: "casas",
    title: "Casas",
    short: "Viviendas únicas",
    intent: "construir mi casa desde cero",
  },
  {
    slug: "piscinas",
    title: "Piscinas",
    short: "Espacios para disfrutar",
    intent: "hacer una piscina",
  },
  {
    slug: "quinchos",
    title: "Quinchos",
    short: "Lugares para compartir",
    intent: "construir un quincho",
  },
  {
    slug: "ampliaciones",
    title: "Ampliaciones",
    short: "Más espacio en tu hogar",
    intent: "ampliar mi vivienda",
  },
];

// Sugerencias y orientación para el modal de "¿Qué querés construir?".
export type CategorySuggestion = {
  intro: string;
  tips: string[];
  needToKnow: string[];
  estimatedTime: string;
};

export const categorySuggestions: Record<ObraCategory, CategorySuggestion> = {
  casas: {
    intro:
      "Construir una casa desde cero es definir cómo vas a vivir los próximos años. Te ayudamos a tomar decisiones claras antes de empezar.",
    tips: [
      "Pensá la cantidad de dormitorios y baños según tu familia hoy y a 5 años.",
      "Definí prioridades: cocina abierta, espacio de trabajo, lavadero, depósito.",
      "Tener el terreno escriturado y los planos municipales acelera los tiempos.",
      "Reservá un margen del 10% del presupuesto para imprevistos y terminaciones.",
    ],
    needToKnow: [
      "Metros cuadrados aproximados que querés construir",
      "Ubicación del terreno y orientación",
      "Estilo: moderno, contemporáneo, tradicional",
    ],
    estimatedTime: "6 a 12 meses",
  },
  piscinas: {
    intro:
      "Una piscina bien pensada cambia el uso de tu casa todo el año. Te orientamos para elegir tamaño, materiales y equipamiento.",
    tips: [
      "Definí el uso principal: familiar, decorativo, deportivo o pileta para niños.",
      "Pensá la integración con quincho, deck y jardín desde el inicio.",
      "El sistema de filtrado y la iluminación afectan más al disfrute que el tamaño.",
      "Considerá un sector de sombra cercano (pérgola o vela) para el verano paraguayo.",
    ],
    needToKnow: [
      "Espacio disponible en el terreno",
      "Cantidad de personas que la van a usar",
      "Si querés bordes, deck, iluminación o cascadas",
    ],
    estimatedTime: "1 a 3 meses",
  },
  quinchos: {
    intro:
      "El quincho es el corazón de las reuniones. Lo diseñamos para que sea cómodo, fresco y bien terminado.",
    tips: [
      "Definí cuántas personas querés sentar como máximo en una reunión.",
      "Sumá parrilla, horno de barro o cocina equipada según tu uso real.",
      "Una buena ventilación y altura de techo es clave para el clima de Asunción.",
      "Pensá el quincho conectado con piscina o jardín para ampliar el espacio.",
    ],
    needToKnow: [
      "Cantidad de invitados habituales",
      "Si querés baño, parrilla y/o cocina equipada",
      "Materiales preferidos: ladrillo visto, madera, mampostería",
    ],
    estimatedTime: "2 a 4 meses",
  },
  ampliaciones: {
    intro:
      "Ampliar es ganar metros sin perder lo que ya tenés. Estudiamos tu casa actual y te proponemos la mejor forma de crecer.",
    tips: [
      "Identificá qué te falta: dormitorio, baño, lavadero, espacio de trabajo.",
      "Crecer en altura suele ser más conveniente cuando el terreno es chico.",
      "Cuidamos que la ampliación dialogue estéticamente con la construcción existente.",
      "Coordinamos la obra para minimizar molestias si seguís viviendo en la casa.",
    ],
    needToKnow: [
      "Qué ambientes querés sumar",
      "Si querés ampliar en planta baja o sumar planta alta",
      "Antigüedad y estado actual de la vivienda",
    ],
    estimatedTime: "2 a 6 meses",
  },
};
