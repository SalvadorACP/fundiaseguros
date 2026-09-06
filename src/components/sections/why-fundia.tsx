import { Check, MessageCircle, Search, Waypoints } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Conversamos", text: "Cuéntanos qué quieres proteger y qué te preocupa." },
  { icon: Search, title: "Revisamos", text: "Identificamos alternativas acordes con tus prioridades." },
  { icon: Waypoints, title: "Te acompañamos", text: "Resolvemos tus dudas para que puedas decidir con claridad." },
];

export function WhyFundia() {
  return (
    <section id="nosotros" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">NUESTRA FORMA DE AYUDARTE</p>
          <h2 className="section-heading mt-4">Seguros sin vueltas innecesarias.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted-foreground">Una conversación cercana, información comprensible y acompañamiento durante tu elección.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-primary"><span className="grid size-7 place-items-center rounded-full bg-accent/25"><Check className="size-4" /></span>Atención directa y personalizada</div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="rounded-2xl border border-primary/10 bg-white/55 p-7">
              <div className="flex items-center justify-between"><Icon className="size-6 text-accent-strong" /><span className="text-xs font-semibold text-primary/35">PASO {index + 1}</span></div>
              <h3 className="mt-12 font-display text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
