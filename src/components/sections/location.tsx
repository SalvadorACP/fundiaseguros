import { siteConfig } from "@/config/site";

export function Location() {
  return (
    <section id="ubicacion" className="border-t border-primary/10 px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">ESTAMOS CERCA</p>
            <h2 className="section-heading mt-4">Visítanos en Mazatlán.</h2>
          </div>
          <div className="max-w-md sm:text-right">
            <p className="leading-7 text-muted-foreground">{siteConfig.location.address}</p>
            <a href={siteConfig.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">Abrir en Google Maps</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-[0_25px_80px_-55px_rgba(24,43,53,0.55)]">
          <iframe
            src={siteConfig.location.mapEmbedUrl}
            width="100%"
            height="430"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
            title="Ubicación de Fundia Seguros"
          />
        </div>
      </div>
    </section>
  );
}
