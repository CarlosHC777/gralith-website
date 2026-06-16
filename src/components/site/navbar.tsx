"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { navigationItems } from "@/content/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(7,7,8,0.8)] backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md bg-[rgba(255,252,246,0.92)] px-2 py-1 shadow-[0_8px_24px_-20px_#000]"
            aria-label="Gralith"
          >
            <Image
              src="/brand/gralith-logo-horizontal.png"
              alt="Gralith"
              width={142}
              height={80}
              className="h-9 w-auto max-w-28 object-contain sm:max-w-none md:h-10"
              priority
            />
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/contacto"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors hover:text-[var(--gralith-dark-text)]",
                    isActive
                      ? "text-[var(--gralith-dark-text)]"
                      : "text-[var(--gralith-dark-text-secondary)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Button
            asChild
            size="sm"
            className="rounded-md bg-[var(--gralith-garnet)] px-2.5 text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-garnet-muted)] sm:px-3"
          >
            <Link href="/contacto">
              <span className="sm:hidden">Diagnóstico</span>
              <span className="hidden sm:inline">Solicitar diagnóstico</span>
            </Link>
          </Button>
        </nav>
      </header>
      <div aria-hidden="true" className="h-16 shrink-0" />
    </>
  );
}
