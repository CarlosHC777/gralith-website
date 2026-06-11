import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/despachos-juridicos", label: "Legal" },
  { href: "/automatizacion-de-procesos", label: "Procesos" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/92 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Gralith">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
            G
          </span>
          <span className="text-sm font-semibold tracking-normal text-foreground">
            Gralith
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Button asChild size="sm" className="rounded-md">
          <Link href="/contacto">Solicitar diagnóstico</Link>
        </Button>
      </nav>
    </header>
  );
}
