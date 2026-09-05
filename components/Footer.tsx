import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.name} — {siteConfig.tagline}, {siteConfig.city}
        </p>
        <div className="flex gap-6">
          <Link href="/mentions-legales" className="hover:text-accent-dark">
            Mentions légales
          </Link>
          <Link href="/a-propos" className="hover:text-accent-dark">
            À propos
          </Link>
        </div>
      </div>
    </footer>
  );
}
