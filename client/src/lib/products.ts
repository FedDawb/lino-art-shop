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
    id: "fox-in-repose",
    name: "Fox in Repose",
    tagline: "A study in stillness",
    description:
      "Hand-carved and hand-printed, this bold graphic fox captures the quiet intelligence of the animal. Each print is pulled individually from the lino block, meaning no two are identical. Printed in rich oil-based ink on heavyweight Somerset Velvet paper.",
    price: 3500,
    edition: "Edition of 30",
    size: "A4 (21 × 29.7 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, carbon black",
    category: "Wildlife",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-fox-AdJyGkvi9xwH6Vnjbh6xVc.webp",
    inStock: true,
    stockCount: 12,
  },
  {
    id: "botanical-study",
    name: "Botanical Study No. 1",
    tagline: "Monstera, fern & spiral",
    description:
      "An intricate study of tropical foliage — monstera, fern fronds, and a tight spiral unfurling. The bold contrast between ink and paper creates a dramatic graphic quality that works equally well in modern and traditional interiors.",
    price: 4000,
    edition: "Edition of 25",
    size: "A3 (29.7 × 42 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, carbon black",
    category: "Botanicals",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-botanicals-meCqE8g4mmbbcsjLDeKjrP.webp",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "standing-heron",
    name: "Standing Heron",
    tagline: "Patience carved in ink",
    description:
      "The grey heron is a master of stillness. This print distils that quality into clean, confident lines — a silhouette that commands space. Printed on deckle-edged paper for a raw, handmade feel.",
    price: 3500,
    edition: "Edition of 30",
    size: "A4 (21 × 29.7 cm)",
    paper: "300gsm Somerset Velvet, deckle edge",
    ink: "Oil-based relief ink, carbon black",
    category: "Wildlife",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-heron-NUknVeBb6Twj8fEepCNzNT.webp",
    inStock: true,
    stockCount: 15,
  },
  {
    id: "winter-moon",
    name: "Winter Moon",
    tagline: "Bare trees under a full moon",
    description:
      "Inspired by a walk on a clear winter night — the full moon enormous above bare-branched trees, the hills rolling away into darkness. The hatched sky is carved line by line, giving the sky its characteristic energy.",
    price: 5000,
    edition: "Edition of 20",
    size: "A3 (29.7 × 42 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, carbon black",
    category: "Landscape",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-moon-nzGnicgibtkXDMR5gdKAJ9.webp",
    inStock: true,
    stockCount: 6,
  },
  {
    id: "great-wave",
    name: "The Great Wave",
    tagline: "After Hokusai — in lino",
    description:
      "A homage to Hokusai's iconic composition, reinterpreted through the medium of linocut. The wave's energy is translated into bold carved lines, each one cut by hand. A statement piece for any wall.",
    price: 5500,
    edition: "Edition of 15",
    size: "A3 (29.7 × 42 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, carbon black",
    category: "Seascape",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663573053168/4U2XijTtpH8LNJPLuiQvAu/lino-print-wave-4SumiT3oy6f8dz8UNZS6QA.webp",
    inStock: true,
    stockCount: 4,
  },
  {
    id: "spring-burst",
    name: "Spring Burst",
    tagline: "The language of pressure and touch",
    description:
      "Hand-pressed into thick, textured paper, this print reveals the intimate geography of my hands. Where I pressed deepest—where my body leaned into the block with intention—the blooms emerge luminous and full. Where my touch faltered, the ink whispers softly, showing me exactly where to return, where to press harder next time. The chatter marks are not mistakes. They are a conversation between my hands and the paper, a record of vulnerability and learning. Each uneven line, each stuttering bloom, is a love letter to the work itself. This is what it means to carve by hand—to leave evidence of exactly how much you cared.",
    price: 3500,
    edition: "One-of-a-kind",
    size: "A3 (29.7 × 42 cm)",
    paper: "Thick, deep-textured handmade paper, cream",
    ink: "Oil-based relief ink, black",
    category: "Botanicals",
    image: "/manus-storage/20260520_114547_be7a5b03.jpg",
    inStock: true,
    stockCount: 1,
  },
  {
    id: "classic-butch",
    name: "Classic Butch",
    tagline: "Hand in pocket. Unmistakable stance.",
    description:
      "There is a language in how a butch holds herself. Hand resting in denim pocket, belt buckle catching the light, plaid shirt worn like armor and comfort all at once. This is the portrait of quiet confidence, of a woman who knows exactly who she is. The recognisable details tell a story that sapphic women understand without words. It is a celebration of the butch aesthetic, carved with reverence for every woman who has ever felt this kind of power in her own skin. A love letter to the women who make us weak in the knees.",
    price: 1800,
    edition: "Edition of 40",
    size: "A5 (14.8 x 21 cm)",
    paper: "300gsm Somerset Velvet",
    ink: "Oil-based relief ink, black",
    category: "Sapphic",
    image: "/manus-storage/20260429_230138_6d72b88d.jpg",
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
    image: "/manus-storage/Screenshot_20260424_171949_Gallery_8ddf7e5f.jpg",
    inStock: true,
    stockCount: 1,
  },
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
