// ============================================================
// SLOW STROKES — QR Code Utility
// Generates QR codes for contact page and returns
// ============================================================

/**
 * Generate a QR code URL for the contact page
 * Uses a public QR code API (qr-server.com) to avoid dependencies
 * 
 * @param baseUrl - Your site's base URL (e.g., https://slowstrokes.com)
 * @param size - QR code size in pixels (default 200)
 * @returns URL to QR code image
 */
export function generateContactQR(baseUrl: string, size: number = 200): string {
  const contactUrl = `${baseUrl}/contact`;
  const encoded = encodeURIComponent(contactUrl);
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}`;
}

/**
 * Generate a QR code for returns specifically
 * Links to contact page with subject pre-filled (if supported)
 */
export function generateReturnsQR(baseUrl: string, size: number = 200): string {
  const returnsUrl = `${baseUrl}/contact?subject=return`;
  const encoded = encodeURIComponent(returnsUrl);
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}`;
}

/**
 * Get the contact page URL with optional subject parameter
 */
export function getContactUrl(
  baseUrl: string,
  subject?: "order" | "return" | "damage" | "shipping" | "custom" | "other"
): string {
  const url = new URL("/contact", baseUrl);
  if (subject) {
    url.searchParams.set("subject", subject);
  }
  return url.toString();
}
