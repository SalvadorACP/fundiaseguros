import { siteConfig } from "@/config/site";

export function Location() {
  return <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16"><div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-primary/15 pb-16 sm:flex-row sm:items-start sm:justify-between"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Visítanos</p><h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">Seguimos aquí.</h2></div><div className="max-w-sm text-sm leading-6 text-muted-foreground"><p>{siteConfig.location.address}</p><a href={siteConfig.location.mapsUrl} target="_blank" rel="noreferrer" className="mt-5 inline-block font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">Ver en Google Maps</a></div></div></section>;
}
