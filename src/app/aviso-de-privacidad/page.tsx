import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = { title: "Aviso de privacidad", description: "Información sobre el tratamiento de datos personales en Fundia Seguros." };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-10 lg:px-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4">← Volver al inicio</Link>
        <p className="eyebrow mt-16">FUNDIA SEGUROS</p>
        <h1 className="section-heading mt-4">Aviso de privacidad</h1>
        <div className="privacy-copy mt-10">
          <p>Fundia Seguros utiliza los datos personales que compartas voluntariamente por teléfono, correo electrónico o WhatsApp para atender tus solicitudes de información y asesoría relacionadas con seguros.</p>
          <h2>Datos que podemos recibir</h2>
          <p>Podemos recibir datos de identificación y contacto, así como la información necesaria para conocer tus necesidades de protección. Evita enviar información sensible hasta que un asesor te indique el medio adecuado para hacerlo.</p>
          <h2>Uso de la información</h2>
          <p>La información se utilizará para responder a tu solicitud, dar seguimiento a la atención y presentarte alternativas relacionadas con el servicio que hayas consultado.</p>
          <h2>Tus derechos</h2>
          <p>Puedes solicitar información, corrección o eliminación de tus datos, así como manifestar que no deseas recibir seguimiento, escribiendo a <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.</p>
          <p className="rounded-xl border border-accent/50 bg-accent/10 p-5 text-sm"><strong>Nota:</strong> este aviso describe el alcance actual del sitio y sus canales de contacto. Debe revisarse con asesoría legal antes de habilitar formularios o recopilar documentación sensible en línea.</p>
        </div>
      </article>
    </main>
  );
}
