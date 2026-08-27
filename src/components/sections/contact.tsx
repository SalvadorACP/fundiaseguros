import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-primary px-6 py-16 text-primary-foreground sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Mientras tanto</p><h2 className="max-w-xl text-balance font-serif text-4xl leading-tight sm:text-5xl">¿Tienes alguna pregunta?</h2></div>
        <div className="flex flex-col gap-3 text-sm sm:text-base"><a href={`mailto:${siteConfig.contact.email}`} className="border-b border-primary-foreground/30 pb-2 transition-colors hover:border-accent hover:text-accent">{siteConfig.contact.email}</a><a href={`tel:${siteConfig.contact.phone}`} className="border-b border-primary-foreground/30 pb-2 transition-colors hover:border-accent hover:text-accent">{siteConfig.contact.phone}</a></div>
      </div>
    </section>
  );
}
