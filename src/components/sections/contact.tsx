import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section
      id="contacto"
      className="bg-accent px-6 py-16 text-primary sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="eyebrow mb-4">
            HABLEMOS DE LO QUE QUIERES PROTEGER
          </p>

          <h2 className="max-w-2xl text-balance font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Da el primer paso con una conversación.
          </h2>
        </div>

        <div className="flex min-w-full flex-col gap-3 text-sm sm:min-w-80 sm:text-base lg:min-w-96">
          <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary justify-center">Solicitar asesoría por WhatsApp</a>
          <a href={`tel:+52${siteConfig.contact.phone}`} className="border-b border-primary/25 py-2 font-semibold transition-colors hover:border-primary">{siteConfig.contact.phoneDisplay}</a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="border-b border-primary/25 py-2 font-semibold transition-colors hover:border-primary"
          >
            {siteConfig.contact.email}
          </a>

        </div>
      </div>
    </section>
  );
}
