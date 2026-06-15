import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-[var(--gralith-dark-text-muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex rounded-md bg-[rgba(255,252,246,0.92)] px-2 py-1 shadow-[0_8px_24px_-20px_#000]">
            <Image
              src="/brand/gralith-logo-horizontal.png"
              alt="Gralith"
              width={142}
              height={80}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="mt-1">Automatización de procesos para equipos profesionales.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--gralith-dark-text)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
