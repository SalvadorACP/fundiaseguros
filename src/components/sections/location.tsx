import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { name: "Instagram", icon: FaInstagram, href: siteConfig.social.instagram, label: "@fundiaseguros" },
  { name: "Facebook", icon: FaFacebookF, href: siteConfig.social.facebook, label: "Fundia Seguros" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: siteConfig.social.linkedin, label: "Fundia Seguros" },
];

export function Location() {
  return (
    <section id="ubicacion" className="border-t border-primary/10 px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col">
          <div>
            <p className="eyebrow">ESTAMOS CERCA</p>
            <h2 className="location-heading mt-4">Visítanos en Mazatlán.</h2>
          </div>
          <div className="mb-7 mt-5 max-w-lg">
            <p className="leading-7 text-muted-foreground">{siteConfig.location.address}</p>
            <a href={siteConfig.location.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">Abrir en Google Maps</a>
          </div>
        <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_25px_80px_-55px_rgba(24,43,53,0.55)]">
          <iframe
            src={siteConfig.location.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 block h-full w-full"
            title="Ubicación de Fundia Seguros"
          />
        </div>
        </div>
        <section className="social-feature" aria-labelledby="social-heading">
          <p className="social-eyebrow">TAMBIÉN ESTAMOS EN TUS REDES</p>
          <h2 id="social-heading">Sigamos<br /><span>en contacto.</span></h2>
          <p className="social-description">Conoce más de Fundia y acompáñanos a conversar sobre lo que importa: tu salud, tu familia y tu futuro.</p>
          <div className="social-links">
            {socialLinks.map(({ name, icon: Icon, href, label }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visitar Fundia Seguros en ${name} (abre en otra pestaña)`}>
              <span className="social-icon"><Icon aria-hidden="true" /></span>
              <span className="social-link-label"><strong>{name}</strong><span>{label}</span></span>
              <ArrowUpRight className="social-arrow" size={22} aria-hidden="true" />
            </a>)}
          </div>
        </section>
      </div>
    </section>
  );
}
