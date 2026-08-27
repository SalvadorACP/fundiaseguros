import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-primary">FUNDIA SEGUROS · MAZATLÁN</p>
          <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-primary sm:text-7xl lg:text-[6.5rem]">Estamos construyendo algo <em className="font-normal text-accent">nuevo.</em></h1>
        </div>
        <p className="max-w-xs text-pretty text-base leading-7 text-muted-foreground lg:pb-2">Una nueva experiencia digital para acompañarte a proteger lo que más importa.</p>
      </div>
      <div className="mx-auto mt-16 max-w-7xl border-y border-primary/15 py-5 sm:mt-24">
        <div className="flex items-center gap-4 text-sm text-primary"><span className="size-2 rounded-full bg-accent" aria-hidden="true" />Próximamente en línea</div>
      </div>
      <div className="pointer-events-none absolute -right-24 top-20 hidden h-64 w-64 rotate-12 opacity-90 lg:block"><Image src="/images/branding/Fundia_original.png" alt="" fill className="object-contain" aria-hidden="true" /></div>
    </section>
  );
}
