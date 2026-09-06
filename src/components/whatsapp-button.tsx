import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Cotizar por WhatsApp" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1f9d61] px-4 py-3 text-sm font-semibold text-white shadow-xl transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
      <MessageCircle className="size-5" aria-hidden="true" /><span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
