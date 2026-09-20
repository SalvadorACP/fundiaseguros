import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { TeamPreview } from "@/components/sections/team-preview";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-24 lg:px-16">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">ASESORÍA EN SEGUROS</p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-primary sm:text-7xl lg:text-[5.6rem]">
            Tranquilidad <span className="text-accent-strong">a un click de distancia.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Te acompañamos a encontrar una protección adecuada para tu auto, tu salud o tu familia.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary">
              Agenda tu asesoría AQUÍ <ArrowRight className="size-4" />
            </a>
            <a href="#seguros" className="button-secondary">Conoce los seguros</a>
          </div>
        </div>
        <TeamPreview />
      </div>
    </section>
  );
}
