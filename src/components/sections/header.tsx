import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import agentGnp from "../../../public/images/aseguradorasAliadas/GNP/Agente GNP logo sin fondo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/95 px-6 py-4 backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      <Link href="/" aria-label="Fundia Seguros, inicio" className="relative block h-11 w-24 shrink-0 sm:w-32">
        <Image src="/images/branding/Fundia_original.png" alt="Fundia Seguros" fill sizes="160px" className="object-contain object-left" priority />
      </Link>
      <Image src={agentGnp} alt="Agente GNP Seguros" className="h-auto w-20 sm:w-24" sizes="(max-width: 639px) 80px, 96px" priority />
      </div>
      <nav className="hidden items-center gap-4 xl:flex" aria-label="Navegación principal">
        <Link href="/#seguros" className="nav-link">Seguros</Link>
        <Link href="/#nosotros" className="nav-link">Cómo te ayudamos</Link>
        <Link href="/nosotros" className="nav-link">Nosotros</Link>
        <Link href="/nosotros#aseguradoras-aliadas" className="nav-link whitespace-nowrap">Aseguradoras aliadas</Link>
        <Link href="/#blog" className="nav-link">Blog</Link>
        <Link href="/#ubicacion" className="nav-link">Contacto</Link>
      </nav>
      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="header-quote button-primary shrink-0 text-xs sm:text-sm">Cotiza ahora</a>
      </div>
      <nav className="mobile-site-nav xl:hidden" aria-label="Navegación móvil">
        <Link href="/#seguros">Seguros</Link><Link href="/#nosotros">Cómo te ayudamos</Link><Link href="/nosotros">Nosotros</Link><Link href="/nosotros#aseguradoras-aliadas">Aseguradoras aliadas</Link><Link href="/#blog">Blog</Link><Link href="/#ubicacion">Ubicación</Link>
      </nav>
    </header>
  );
}
