// ============================================================
// 📂 BASE DE DATOS DE OBRAS — AQUARQ
// ============================================================
// Este archivo es la ÚNICA fuente de obras mostradas en la web.
// Para AGREGAR una obra: copiá un objeto del array y modificá los campos.
// Para ELIMINAR una obra: borrá el objeto completo del array.
// Para EDITAR una obra: cambiá el contenido de los campos.
//
// Cada obra se muestra en su categoría correspondiente (/obras/<categoría>)
// y al hacer clic se abre un modal con todos los detalles + galería.
// ============================================================

import type { ObraCategory } from "./aquarq";

// Imágenes disponibles (importadas desde src/assets).
// Para agregar una nueva imagen: importala arriba y usala en el campo `images`.
import heroImage from "../assets/aquarq-home-hero.jpg";
import poolImage from "../assets/aquarq-pool.jpg";
import quinchoImage from "../assets/aquarq-quincho.jpg";
import extensionImage from "../assets/aquarq-extension.jpg";
import progressImage from "../assets/aquarq-work-in-progress.jpg";
import emotionalImage from "../assets/aquarq-emotional-home.jpg";

// ============================================================
// TIPO de cada obra. NO modificar salvo que quieras agregar nuevos campos.
// ============================================================
export type Obra = {
  id: string;                  // identificador único (sin espacios) — ej: "casa-moderna-asuncion"
  category: ObraCategory;      // "casas" | "piscinas" | "quinchos" | "ampliaciones"
  name: string;                // nombre visible de la obra
  location: string;            // ej: "Asunción", "Lambaré"
  size: string;                // ej: "180 m²", "8 × 4 m"
  year?: string;               // opcional — ej: "2024"
  status?: "Finalizada" | "En obra" | "En diseño"; // opcional
  shortDescription: string;    // 1-2 líneas, se muestra en la tarjeta
  longDescription: string;     // texto extenso, se muestra en el modal
  features: string[];          // lista de detalles/características
  images: string[];            // galería del modal — la 1ª se usa como portada
};

// ============================================================
// 📋 OBRAS — agregá, editá o eliminá libremente
// ============================================================
export const obras: Obra[] = [
  // ───────────── CASAS ─────────────
  {
    id: "casa-familiar-moderna-asuncion",
    category: "casas",
    name: "Casa familiar moderna",
    location: "Asunción",
    size: "180 m²",
    year: "2024",
    status: "Finalizada",
    shortDescription:
      "Vivienda de planta baja con tres dormitorios, cocina integrada y galería con piscina.",
    longDescription:
      "Proyecto integral de vivienda unifamiliar pensada para una familia de cuatro integrantes. La casa se desarrolla en una sola planta priorizando la conexión visual con el jardín y la piscina. Los espacios sociales se ubican al frente y los privados al fondo, con una galería techada que extiende el living hacia afuera.",
    features: [
      "3 dormitorios + suite principal",
      "Cocina abierta integrada al living-comedor",
      "Galería techada con parrilla",
      "Piscina familiar 6 × 3 m",
      "Cochera para 2 vehículos",
      "Terminaciones de primera calidad",
    ],
    images: [heroImage, emotionalImage, poolImage],
  },
  {
    id: "vivienda-contemporanea-lambare",
    category: "casas",
    name: "Vivienda contemporánea",
    location: "Lambaré",
    size: "220 m²",
    year: "2023",
    status: "Finalizada",
    shortDescription:
      "Casa de dos plantas con suite principal, escritorio y patio interno con vegetación.",
    longDescription:
      "Vivienda de dos plantas diseñada para optimizar un terreno angosto. La planta baja concentra los espacios sociales y un patio interno que aporta luz natural. La planta alta resuelve los dormitorios y un escritorio con vista al jardín.",
    features: [
      "Suite principal con vestidor",
      "Patio interno con vegetación",
      "Escritorio en planta alta",
      "Doble altura en living",
      "Estructura de hormigón visto",
    ],
    images: [emotionalImage, heroImage, progressImage],
  },
  {
    id: "casa-en-proceso-mariano",
    category: "casas",
    name: "Casa en construcción",
    location: "Mariano R. Alonso",
    size: "150 m²",
    year: "2025",
    status: "En obra",
    shortDescription:
      "Vivienda en ejecución con sistema tradicional y cubierta a dos aguas.",
    longDescription:
      "Obra actualmente en ejecución. Vivienda de planta baja con tres dormitorios, ejecutada con mampostería tradicional, losa de hormigón y cubierta a dos aguas con tejas. Las terminaciones se definen en conjunto con el cliente a medida que avanza la obra.",
    features: [
      "Sistema constructivo tradicional",
      "Cubierta a dos aguas con tejas",
      "3 dormitorios y 2 baños",
      "Galería trasera",
    ],
    images: [progressImage, heroImage],
  },

  // ───────────── PISCINAS ─────────────
  {
    id: "piscina-familiar-deck-asuncion",
    category: "piscinas",
    name: "Piscina familiar con deck",
    location: "Asunción",
    size: "8 × 4 m",
    year: "2024",
    status: "Finalizada",
    shortDescription:
      "Piscina rectangular con deck de madera, iluminación LED y borde infinity al jardín.",
    longDescription:
      "Piscina de uso familiar integrada al jardín principal de la vivienda. Cuenta con deck de madera tratada perimetral, iluminación LED sumergible RGB y un borde infinity hacia el sector de jardín. Sistema de filtrado y bomba de calor incluidos.",
    features: [
      "Dimensiones 8 × 4 m, profundidad 1,4 m",
      "Deck de madera tratada perimetral",
      "Iluminación LED RGB sumergible",
      "Borde infinity hacia jardín",
      "Sistema de filtrado de arena",
    ],
    images: [poolImage, heroImage, emotionalImage],
  },
  {
    id: "piscina-integrada-luque",
    category: "piscinas",
    name: "Piscina integrada a la casa",
    location: "Luque",
    size: "6 × 3 m",
    year: "2023",
    status: "Finalizada",
    shortDescription:
      "Pileta conectada con la galería principal, ideal para familias con niños.",
    longDescription:
      "Piscina pensada para uso familiar con niños pequeños. Diseño de profundidad escalonada y conexión directa con la galería techada de la vivienda, lo que permite supervisión permanente desde el espacio social.",
    features: [
      "Profundidad escalonada (0,6 m a 1,3 m)",
      "Bordes redondeados de seguridad",
      "Iluminación LED blanca",
      "Acceso directo desde galería",
    ],
    images: [poolImage, heroImage],
  },

  // ───────────── QUINCHOS ─────────────
  {
    id: "quincho-parrilla-capiata",
    category: "quinchos",
    name: "Quincho con parrilla",
    location: "Capiatá",
    size: "45 m²",
    year: "2024",
    status: "Finalizada",
    shortDescription:
      "Quincho techado con parrilla, mesada de granito, baño de servicio y conexión al jardín.",
    longDescription:
      "Quincho independiente proyectado para reuniones familiares de hasta 12 personas. Estructura de mampostería con cubierta de tejas, parrilla de ladrillo refractario, mesada de granito negro y baño de servicio. Conexión visual y de circulación con el jardín principal.",
    features: [
      "Parrilla de ladrillo refractario",
      "Mesada de granito negro",
      "Baño de servicio",
      "Cubierta de tejas coloniales",
      "Iluminación cálida regulable",
    ],
    images: [quinchoImage, emotionalImage, heroImage],
  },
  {
    id: "quincho-piscina-asuncion",
    category: "quinchos",
    name: "Quincho con piscina",
    location: "Asunción",
    size: "60 m²",
    year: "2023",
    status: "Finalizada",
    shortDescription:
      "Espacio de reunión integrado a piscina, con iluminación cálida y cubierta de tejas.",
    longDescription:
      "Quincho de mayor escala que combina sector de comedor, parrilla, barra de tragos y conexión directa con la piscina. Pensado para uso intensivo en verano y reuniones nocturnas.",
    features: [
      "Capacidad para 16 personas",
      "Barra de tragos integrada",
      "Conexión directa con piscina",
      "Sistema de ventiladores de techo",
      "Iluminación perimetral cálida",
    ],
    images: [quinchoImage, poolImage, emotionalImage],
  },

  // ───────────── AMPLIACIONES ─────────────
  {
    id: "ampliacion-dormitorio-fdm",
    category: "ampliaciones",
    name: "Ampliación de dormitorio en suite",
    location: "Fernando de la Mora",
    size: "25 m²",
    year: "2024",
    status: "Finalizada",
    shortDescription:
      "Sumamos un dormitorio en suite con baño privado, integrado al estilo original.",
    longDescription:
      "Ampliación lateral sobre vivienda existente para sumar un dormitorio en suite con baño privado. La intervención respeta los materiales y la línea estética original de la casa, integrándose como si siempre hubiera estado allí.",
    features: [
      "Dormitorio principal con vestidor",
      "Baño privado con ducha",
      "Aberturas que respetan el estilo original",
      "Obra ejecutada sin desocupar la casa",
    ],
    images: [extensionImage, progressImage],
  },
  {
    id: "planta-alta-nueva-asuncion",
    category: "ampliaciones",
    name: "Planta alta nueva",
    location: "Asunción",
    size: "70 m²",
    year: "2023",
    status: "Finalizada",
    shortDescription:
      "Construcción de planta alta con dos dormitorios y baño sobre vivienda existente.",
    longDescription:
      "Crecimiento en altura sobre una vivienda de planta baja existente. Se reforzó la estructura, se construyó una losa nueva y se sumaron dos dormitorios, un baño completo y un pequeño estar en planta alta. Escalera interna integrada al living.",
    features: [
      "2 dormitorios + baño completo",
      "Estar de planta alta",
      "Escalera interna de hormigón revestido",
      "Refuerzo estructural previo",
    ],
    images: [progressImage, extensionImage, heroImage],
  },
];

// ============================================================
// HELPERS — no requieren mantenimiento
// ============================================================
export const getObrasByCategory = (category: ObraCategory): Obra[] =>
  obras.filter((o) => o.category === category);

export const getObraById = (id: string): Obra | undefined =>
  obras.find((o) => o.id === id);
