import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
      <a href="#inicio" aria-label="Fundia Seguros, inicio" className="relative block h-12 w-44">
        <Image src="/images/branding/Fundia_original.png" alt="Fundia Seguros" fill className="object-contain object-left" priority />
      </a>
      <a href="#contacto" className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-primary transition-opacity hover:opacity-70 sm:block">Hablemos</a>
    </header>
  );
}
