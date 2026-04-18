// ============================================================
// LINO ART SHOP — Shipping Calculator
// Rates in GBP pence. Adjust as needed.
// ============================================================

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number; // pence
  estimatedDays: string;
}

export interface ShippingZone {
  id: string;
  name: string;
  countries: string[];
  options: ShippingOption[];
}

export const shippingZones: ShippingZone[] = [
  {
    id: "uk",
    name: "United Kingdom",
    countries: ["GB"],
    options: [
      {
        id: "uk-standard",
        name: "Standard Post",
        description: "Royal Mail 2nd Class",
        price: 350,
        estimatedDays: "3–5 business days",
      },
      {
        id: "uk-tracked",
        name: "Tracked Post",
        description: "Royal Mail 1st Class Tracked",
        price: 550,
        estimatedDays: "1–2 business days",
      },
      {
        id: "uk-express",
        name: "Special Delivery",
        description: "Royal Mail Special Delivery (guaranteed next day)",
        price: 950,
        estimatedDays: "Next business day",
      },
    ],
  },
  {
    id: "europe",
    name: "Europe",
    countries: [
      "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
      "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
      "PL", "PT", "RO", "SK", "SI", "ES", "SE", "NO", "CH",
    ],
    options: [
      {
        id: "eu-standard",
        name: "International Standard",
        description: "Royal Mail International Standard",
        price: 850,
        estimatedDays: "5–10 business days",
      },
      {
        id: "eu-tracked",
        name: "International Tracked",
        description: "Royal Mail International Tracked",
        price: 1250,
        estimatedDays: "3–7 business days",
      },
    ],
  },
  {
    id: "world",
    name: "Rest of World",
    countries: [], // fallback
    options: [
      {
        id: "world-standard",
        name: "International Standard",
        description: "Royal Mail International Standard",
        price: 1200,
        estimatedDays: "7–14 business days",
      },
      {
        id: "world-tracked",
        name: "International Tracked",
        description: "Royal Mail International Tracked",
        price: 1800,
        estimatedDays: "5–10 business days",
      },
    ],
  },
];

export const countries = [
  { code: "GB", name: "United Kingdom" },
  { code: "AT", name: "Austria" },
  { code: "BE", name: "Belgium" },
  { code: "BG", name: "Bulgaria" },
  { code: "HR", name: "Croatia" },
  { code: "CY", name: "Cyprus" },
  { code: "CZ", name: "Czech Republic" },
  { code: "DK", name: "Denmark" },
  { code: "EE", name: "Estonia" },
  { code: "FI", name: "Finland" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "GR", name: "Greece" },
  { code: "HU", name: "Hungary" },
  { code: "IE", name: "Ireland" },
  { code: "IT", name: "Italy" },
  { code: "LV", name: "Latvia" },
  { code: "LT", name: "Lithuania" },
  { code: "LU", name: "Luxembourg" },
  { code: "MT", name: "Malta" },
  { code: "NL", name: "Netherlands" },
  { code: "NO", name: "Norway" },
  { code: "PL", name: "Poland" },
  { code: "PT", name: "Portugal" },
  { code: "RO", name: "Romania" },
  { code: "SK", name: "Slovakia" },
  { code: "SI", name: "Slovenia" },
  { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" },
  { code: "CH", name: "Switzerland" },
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "NZ", name: "New Zealand" },
  { code: "JP", name: "Japan" },
  { code: "SG", name: "Singapore" },
  { code: "HK", name: "Hong Kong" },
  { code: "ZA", name: "South Africa" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
  { code: "IN", name: "India" },
  { code: "AE", name: "United Arab Emirates" },
];

export function getShippingZone(countryCode: string): ShippingZone {
  const zone = shippingZones.find((z) => z.countries.includes(countryCode));
  return zone ?? shippingZones[shippingZones.length - 1]; // fallback to world
}

export function formatPrice(pence: number): string {
  return `£${(pence / 100).toFixed(2)}`;
}
