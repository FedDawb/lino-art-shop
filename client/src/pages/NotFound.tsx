import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p
        className="text-8xl font-black text-[oklch(0.68_0.12_65)] mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        404
      </p>
      <h1
        className="text-2xl font-bold text-[oklch(0.93_0.010_75)] mb-3"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Page Not Found
      </h1>
      <p className="text-[oklch(0.55_0.010_75)] mb-8 max-w-sm">
        The page you're looking for doesn't exist, or may have moved.
      </p>
      <Link href="/">
        <button className="btn-ochre">Back to Home</button>
      </Link>
    </div>
  );
}
