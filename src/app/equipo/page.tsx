import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { teamMembers } from "@/content/team";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Nuestro equipo",
  description: "Conoce a las personas que integran Fundia Seguros, sus funciones y sus datos de contacto en Mazatlán.",
  alternates: { canonical: "/equipo" },
  openGraph: {
    title: "Nuestro equipo | Fundia Seguros",
    description: "Conoce al equipo de Fundia Seguros y encuentra cómo contactarnos.",
    url: "/equipo",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="team-heading">
          <div className="mx-auto max-w-7xl">
            <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <ArrowLeft size={16} aria-hidden="true" /> Volver al inicio
            </Link>
            <p className="eyebrow">PERSONAS CERCA DE TI</p>
            <h1 id="team-heading" className="section-heading mt-5">Conoce al equipo de Fundia.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Desde Mazatlán, combinamos atención cercana y seguimiento digital.
              Aquí puedes conocer a quienes integran nuestro equipo y encontrar sus datos de contacto.
            </p>
            <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <section key={member.id} id={member.id} className="team-profile" aria-labelledby={`${member.id}-name`}>
                  <Image src={member.image} alt={`${member.name}, ${member.role}`} sizes="(min-width: 1440px) 624px, (min-width: 1024px) 44vw, 90vw" className="h-auto w-full" priority={index === 0} />
                  <div className="p-6 sm:p-8">
                    <p className="eyebrow">{member.role}</p>
                    <h2 id={`${member.id}-name`} className="mt-3 font-display text-2xl font-semibold leading-snug">{member.name}</h2>
                    {member.biography && <p className="mt-5 leading-8 text-muted-foreground">{member.biography}</p>}
                    <div className="team-profile-contact">
                      {member.phone && <a href={`tel:${member.phone}`} aria-label={`Llamar a ${member.name}: ${member.phoneDisplay ?? member.phone}`}><Phone size={18} aria-hidden="true" /><span>{member.phoneDisplay ?? member.phone}</span></a>}
                      {member.email && <a href={`mailto:${member.email}`}><Mail size={18} aria-hidden="true" /><span>{member.email}</span></a>}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
