// ============================================================
// SLOW STROKES — Product Catalogue
// Butch lesbian artist's lino print shop
// To add a new print: copy one entry, update the fields,
// and add your image URL from manus-upload-file --webdev
// ============================================================

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // in GBP pence (e.g. 2500 = £25.00)
  edition: string; // e.g. "Edition of 50"
  size: string; // e.g. "A4 (21 × 29.7 cm)"
  paper: string; // e.g. "300gsm Somerset Velvet"
  ink: string; // e.g. "Oil-based relief ink"
  category: string;
  image: string;
  inStock: boolean;
  stockCount: number;
}

export const products: Product[] = [
  {
    id: "spring-burst",
    name: "Spring Burst",
    tagline: "The language of pressure and touch",
    description:
      "Hand-pressed into thick, textured paper, this print reveals the intimate geography of my hands. Where I pressed deepest—where my body leaned into the block with intention—the blooms emerge luminous and full. Where my touch faltered, the ink whispers softly, showing me exactly where to return, where to press harder next time. The chatter marks are not mistakes. They are a conversation between my hands and the paper, a record of vulnerability and learning. Each uneven line, each stuttering bloom, is a love letter to the work itself. This is what it means to carve by hand—to leave evidence of exactly how much you cared.",
    price: 2500,
    edition: "One-of-a-kind",
    size: "A5 (14.8 × 21 cm)",
    paper: "Thick, deep-texture paper, cream",
    ink: "Water-based ink, black",
    category: "Botanicals",
    image: "/images/fern.jpg",
    inStock: true,
    stockCount: 12,
  },
  {
    id: "classic-butch",
    name: "Classic Butch",
    tagline: "Hand in pocket. Unmistakable stance.",
    description:
      "There is a language in how a butch holds herself. Hand resting in denim pocket, belt buckle catching the light, plaid shirt worn like armor and comfort all at once. This is the portrait of quiet confidence, of a woman who knows exactly who she is. The recognisable details tell a story that sapphic women understand without words. It is a celebration of the butch aesthetic, carved with reverence for every woman who has ever felt this kind of power in her own skin. A love letter to the women who make us weak in the knees.",
    price: 1500,
    edition: "Edition of 40",
    size: "A5 (14.8 x 21 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Water-based relief ink, black",
    category: "Sapphic",
    image: "/images/classicbutch.jpg",
    inStock: true,
    stockCount: 25,
  },
  {
    id: "botanical-tester",
    name: "Botanical Tester",
    tagline: "Testing the love in every line",
    description:
      "This is the print that taught me something. A tester, pulled to check the block, to feel the resistance of the lino under my hands, to watch how the ink flows across the paper. Every tester is a conversation between maker and material. Here, the blooms emerged full and alive, each petal a small victory of pressure and intention. The tester is where I fall in love with the work all over again, where I can feel the potential in my own hands. This is the print that came before the edition, the one that whispered yes, keep going. It carries the joy of the making process, the testing of pressure, the discovery of what this block wants to become. A love letter to the craft itself.",
    price: 1800,
    edition: "One-of-a-kind Tester",
    size: "A5 (14.8 x 21 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, black",
    category: "Botanicals",
    image: "/images/botanicaltester.jpg",
    inStock: true,
    stockCount: 12,
  },
  {
    id: "crow-at-dawn",
    name: "Crow at Dawn",
    tagline: "Black and gold beneath the sun",
    description:
      "This crow arrives at the moment between night and light. Carved with intention into the finest paper, the delicate surface holds the dual inks like a secret. The black body is rendered in bold, confident strokes, each feather a small act of precision. But it is the gold that transforms this print into something luminous. The sun above radiates in warm metallic lines, the branch beneath glows with amber life. Working with two inks on such thin, delicate paper demands absolute control. The pressure must be exact, the touch deliberate. Too much force and the paper tears. Too little and the gold whispers away to nothing. This print is the result of that conversation between my hands and the paper, between intention and fragility. The crow watches over it all, patient and knowing.",
    price: 2800,
    edition: "Edition of 5",
    size: "A4 (21 × 29.7 cm)",
    paper: "Thin, delicate handmade paper, cream",
    ink: "Oil-based relief ink, black and gold",
    category: "Wildlife",
    image: "/manus-storage/crow-gold-black_14cb21ad.png",
    inStock: true,
    stockCount: 5,
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
