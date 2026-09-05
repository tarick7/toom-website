import Link from "next/link";
import { mainNav, siteConfig } from "@/lib/content";

export function Header() {
  return (
    <header className="border-b border-border bg-surface/90 backdrop-blur sticky top-0 z-40">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          {siteConfig.name}
        </Link>
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-accent-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/traiteur/devis"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
