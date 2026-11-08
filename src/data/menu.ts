// Carta de Café La Esquina. Edita aquí productos, descripciones y precios (en euros).

export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "cafes",
    label: "Cafés",
    items: [
      { name: "Espresso", description: "Corto e intenso, de nuestro tueste de especialidad.", price: 1.4 },
      { name: "Café con leche", description: "El de toda la vida, con leche cremosa.", price: 1.8 },
      { name: "Cortado", description: "Espresso con un toque de leche caliente.", price: 1.6 },
      { name: "Flat white", description: "Doble ristretto con microespuma sedosa.", price: 2.6 },
      { name: "Capuchino", description: "Espresso, leche y abundante espuma con cacao.", price: 2.4 },
    ],
  },
  {
    id: "desayunos",
    label: "Desayunos",
    items: [
      { name: "Tostada con tomate", description: "Pan de masa madre, tomate rallado y aceite de oliva virgen extra.", price: 2.5 },
      { name: "Tostada de aguacate", description: "Aguacate, huevo poché y semillas tostadas.", price: 5.5 },
      { name: "Croissant a la plancha", description: "Con mantequilla y mermelada casera.", price: 2.8 },
      { name: "Bowl de yogur", description: "Yogur natural, granola casera y fruta de temporada.", price: 4.5 },
      { name: "Desayuno de la esquina", description: "Café, zumo de naranja natural y tostada a elegir.", price: 5.9 },
    ],
  },
  {
    id: "reposteria",
    label: "Repostería",
    items: [
      { name: "Tarta de queso", description: "Cremosa, al estilo vasco, horneada cada mañana.", price: 4.2 },
      { name: "Bizcocho de limón", description: "Esponjoso, con glaseado de limón.", price: 2.8 },
      { name: "Cookie de chocolate", description: "Crujiente por fuera, tierna por dentro.", price: 2.2 },
      { name: "Rollo de canela", description: "Masa brioche con canela y azúcar moreno.", price: 3.2 },
      { name: "Magdalena casera", description: "Como las de la abuela, con aceite de oliva.", price: 1.5 },
    ],
  },
  {
    id: "bebidas-frias",
    label: "Bebidas frías",
    items: [
      { name: "Café con hielo", description: "Espresso servido sobre hielo, solo o con leche.", price: 2.0 },
      { name: "Cold brew", description: "Café infusionado en frío durante 18 horas.", price: 3.2 },
      { name: "Limonada casera", description: "Limón natural, hierbabuena y un toque de miel.", price: 3.0 },
      { name: "Zumo de naranja natural", description: "Recién exprimido.", price: 2.8 },
      { name: "Té helado de melocotón", description: "Té negro infusionado con melocotón.", price: 2.9 },
    ],
  },
];

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} €`;
}
