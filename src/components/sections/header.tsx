import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/95 px-6 py-4 backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
      <Link href="/" aria-label="Fundia Seguros, inicio" className="relative block h-11 w-32 shrink-0 sm:w-40">
        <Image src="/images/branding/Fundia_original.png" alt="Fundia Seguros" fill sizes="160px" className="object-contain object-left" priority />
      </Link>
      <nav className="hidden items-center gap-5 xl:gap-8 lg:flex" aria-label="Navegación principal">
        <Link href="/#seguros" className="nav-link">Seguros</Link>
        <Link href="/#nosotros" className="nav-link">Cómo te ayudamos</Link>
        <Link href="/nosotros" className="nav-link">Nosotros</Link>
        <Link href="/#blog" className="nav-link">Blog</Link>
        <Link href="/#ubicacion" className="nav-link">Contacto</Link>
      </nav>
      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary px-4 py-2.5 text-sm sm:px-5">Cotiza ahora</a>
      </div>
      <nav className="mobile-site-nav lg:hidden" aria-label="Navegación móvil">
        <Link href="/#seguros">Seguros</Link><Link href="/#nosotros">Cómo te ayudamos</Link><Link href="/nosotros">Nosotros</Link><Link href="/#blog">Blog</Link><Link href="/#ubicacion">Ubicación</Link>
      </nav>
    </header>
  );
}
