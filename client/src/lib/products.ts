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
];

export const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
