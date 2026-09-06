import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary/10 bg-background/95 px-6 py-4 backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
      <a href="#inicio" aria-label="Fundia Seguros, inicio" className="relative block h-11 w-40">
        <Image src="/images/branding/Fundia_original.png" alt="Fundia Seguros" fill sizes="160px" className="object-contain object-left" priority />
      </a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
        <a href="#seguros" className="nav-link">Seguros</a>
        <a href="#nosotros" className="nav-link">Cómo te ayudamos</a>
        <a href="#ubicacion" className="nav-link">Ubicación</a>
      </nav>
      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary px-4 py-2.5 text-sm sm:px-5">Cotiza ahora</a>
      </div>
    </header>
  );
}
