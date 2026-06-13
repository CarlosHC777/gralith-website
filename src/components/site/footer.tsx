import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/brand/gralith-logo-horizontal.png"
            alt="Gralith"
            width={142}
            height={80}
            className="h-10 w-auto object-contain"
          />
          <p className="mt-1">Automatización de procesos para equipos profesionales.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
