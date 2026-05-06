// ============================================================
// SLOW STROKES — QR Code Display Component
// Shows QR code for contact/returns on packing slips
// ============================================================

import { generateContactQR, generateReturnsQR } from "@/lib/qr";

interface QRCodeDisplayProps {
  baseUrl?: string;
  type?: "contact" | "returns";
  size?: number;
  label?: string;
}

export default function QRCodeDisplay({
  baseUrl = typeof window !== "undefined" ? window.location.origin : "https://slowstrokes.com",
  type = "returns",
  size = 150,
  label = "Questions? Scan here",
}: QRCodeDisplayProps) {
  const qrUrl = type === "returns" 
    ? generateReturnsQR(baseUrl, size)
    : generateContactQR(baseUrl, size);

  return (
    <div className="flex flex-col items-center gap-2">
      <img 
        src={qrUrl} 
        alt={label}
        width={size}
        height={size}
        className="border-2 border-[oklch(0.68_0.12_65)] p-2 bg-white"
      />
      <p className="label-mono text-[0.6rem] text-[oklch(0.68_0.12_65)] text-center max-w-[150px]">
        {label}
      </p>
    </div>
  );
}
