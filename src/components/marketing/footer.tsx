import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-foreground">Gralith</p>
          <p className="mt-1">Automatización de procesos para equipos profesionales.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/despachos-juridicos" className="hover:text-foreground">
            Gralith Legal
          </Link>
          <Link href="/automatizacion-de-procesos" className="hover:text-foreground">
            Automatización
          </Link>
          <Link href="/contacto" className="hover:text-foreground">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
