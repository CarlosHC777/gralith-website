import Image from "next/image";
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
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Gralith">
          <Image
            src="/brand/gralith-mark.png"
            alt=""
            width={32}
            height={32}
            className="size-8 object-contain md:hidden"
            priority
          />
          <Image
            src="/brand/gralith-logo-horizontal.png"
            alt="Gralith"
            width={142}
            height={80}
            className="hidden h-10 w-auto object-contain md:block"
            priority
          />
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
        <Button asChild size="sm" className="rounded-md px-2.5 sm:px-3">
          <Link href="/contacto">
            <span className="sm:hidden">Diagnóstico</span>
            <span className="hidden sm:inline">Solicitar diagnóstico</span>
          </Link>
        </Button>
      </nav>
    </header>
  );
}
