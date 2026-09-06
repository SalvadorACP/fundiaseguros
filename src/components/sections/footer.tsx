import { siteConfig } from "@/config/site";

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="px-6 py-10 text-sm text-muted-foreground sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <Image src="/images/branding/Fundia_original.png" width={116} height={40} alt="Fundia Seguros" className="h-auto w-28" />
        <p>© {new Date().getFullYear()} Fundia Seguros</p>
        <a href="/aviso-de-privacidad" className="underline decoration-primary/25 underline-offset-4 hover:text-primary">Aviso de privacidad</a>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
          aria-label="Instagram"
        >
          <FaInstagram className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.social.linkedin}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="h-5 w-5" />
        </a>
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-primary"
          aria-label="Facebook"
        >
          <FaFacebookF className="h-5 w-5" />
        </a>
      </div>
      </div>
    </footer>
  );
}
