import { siteConfig } from "@/config/site";

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="flex flex-col gap-5 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
      <p>© {new Date().getFullYear()} Fundia Seguros</p>
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
    </footer>
  );
}