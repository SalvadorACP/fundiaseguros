import { Building2, CarFront, HeartPulse, ShieldCheck } from "lucide-react";

const services = [
  { icon: CarFront, title: "Seguro de auto", description: "Protección para tu vehículo y respaldo ante los imprevistos del camino." },
  { icon: HeartPulse, title: "Gastos médicos", description: "Opciones para cuidar tu salud y la estabilidad de tu familia." },
  { icon: ShieldCheck, title: "Seguro de vida", description: "Respaldo financiero para quienes más dependen de ti." },
  { icon: Building2, title: "Protección empresarial", description: "Coberturas para proteger la continuidad y el patrimonio de tu negocio." },
];

export function Services() {
  return (
    <section id="seguros" className="bg-primary px-6 py-20 text-primary-foreground sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-7 border-b border-white/15 pb-12 lg:grid-cols-2 lg:items-end">
          <div><p className="eyebrow text-accent">SOLUCIONES PARA CADA ETAPA</p><h2 className="section-heading mt-4 text-white">Una protección que sí entiendes.</h2></div>
          <p className="max-w-xl text-lg leading-8 text-white/65 lg:justify-self-end">Exploramos contigo las opciones disponibles para que conozcas qué estás protegiendo y por qué.</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group bg-primary p-7 transition-colors hover:bg-white/[0.04] sm:p-8">
              <div className="mb-12 flex items-start justify-between"><Icon className="size-7 text-accent" aria-hidden="true" /><span className="text-sm text-white/35">0{index + 1}</span></div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
