import { siteConfig } from "@/config/site";

export function Location() {
  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Texto y título */}
        <div className="flex flex-col gap-8 border-b border-primary/15 pb-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Visítanos
            </p>
            <h2 className="font-serif text-3xl leading-tight text-primary sm:text-4xl">
              Seguimos aquí.
            </h2>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-12 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={siteConfig.location.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Ubicación de Fundia Seguros"
          />
        </div>
      </div>
    </section>
  );
}