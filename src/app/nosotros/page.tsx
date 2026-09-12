import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, ShieldCheck } from "lucide-react";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = { title: "Nosotros", description: "Conoce la historia y filosofía de Fundia Seguros: asesoría cercana, claridad y estrategias de protección desde Mazatlán.", alternates: { canonical: "/nosotros" }, openGraph: { title: "Nosotros | Fundia Seguros", description: "Conoce al despacho y nuestra forma de acompañarte a proteger lo que importa.", url: "/nosotros", type: "website" } };

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="about-hero px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="eyebrow">FILOSOFÍA FUNDIA</p>

              <h1 className="section-heading mt-6">
                Tu patrimonio,
                <br />
                <span className="text-accent-strong">
                  estratégicamente protegido.
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-lg leading-8 text-muted-foreground">
              Somos un despacho de seguros que escucha, explica y acompaña.
              Diseñamos contigo una estrategia de protección para tu vida, tu
              familia y tus proyectos.
            </p>
          </div>
        </section>

        <section className="about-story px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="article-eyebrow">NUESTRO ORIGEN</p>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight">
                Una visión financiera.
                <br />
                <span className="text-accent">Un trato humano.</span>
              </h2>

              <p className="mt-8 text-sm text-white/60">
                ATENCIÓN PRESENCIAL Y DIGITAL
              </p>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/75">
              <p>
                Fundia se consolidó en 2023 a partir de la trayectoria de José
                Gilberto Ayala Rosales, licenciado en Finanzas por la
                Universidad de Colima. Su interés por el sector comenzó al
                estudiar el funcionamiento, la regulación y la solidez
                financiera de las aseguradoras.
              </p>

              <p>
                Ese interés se convirtió en una carrera de asesoría y, después,
                en un proyecto de equipo. Hoy, Fundia reúne esa perspectiva
                financiera con una atención profesional y cercana, enfocada en
                comprender las necesidades de cada persona.
              </p>

              <p>
                Desde Mazatlán atendemos de forma presencial y digital. Nuestro
                trabajo comienza con una conversación y continúa con
                explicaciones claras para que puedas decidir con información.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">LO QUE NOS MUEVE</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="about-value">
                <Compass aria-hidden="true" />

                <h2>Nuestra misión</h2>

                <p>
                  Proteger las finanzas de quienes construyen con esfuerzo,
                  asegurando la mejor estrategia, claridad total y atención personalizada.
                </p>
              </article>

              <article className="about-value">
                <ShieldCheck aria-hidden="true" />

                <h2>Nuestra visión</h2>

                <p>
                  Ser una referencia premium de intermediación de seguros en el pacifico mexicano,
                  respaldada por el mejor equipo humano del sector.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-primary/10 px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">NUESTRA FORMA DE TRABAJAR</p>

              <h2 className="section-heading mt-4">
                Primero tu situación.
                <br />
                Después, la estrategia.
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Nos interesa que sepas qué estás contratando, cómo funciona y
                qué límites tiene. La claridad es parte de la protección.
              </p>

              <Link href="/#seguros" className="button-secondary mt-8">
                Explora nuestros seguros <ArrowRight size={16} />
              </Link>
            </div>

            <div className="about-principles">
              {[
                {
                  title: "Escuchamos",
                  text: "Conocemos tus prioridades, responsabilidades y presupuesto antes de hablar de productos.",
                },
                {
                  title: "Explicamos",
                  text: "Revisamos contigo coberturas, condiciones y diferencias para tomar una decisión informada.",
                },
                {
                  title: "Acompañamos",
                  text: "Te orientamos sobre el uso de tu póliza y la revisión de tus necesidades cuando cambian.",
                },
              ].map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <Handshake
              className="mb-6 text-accent-strong"
              size={32}
              aria-hidden="true"
            />

            <p className="eyebrow">OPCIONES PARA TU PROTECCIÓN</p>

            <div className="mt-5 grid gap-8 lg:grid-cols-2">
              <h2 className="section-heading">
                Trabajamos con
                <br />
                GNP y Quálitas.
              </h2>

              <p className="text-lg leading-8 text-muted-foreground">
                Te orientamos sobre los productos disponibles según el tipo de
                protección que buscas. Nuestro papel como intermediarios es
                ayudarte a entender la propuesta y sus condiciones; las
                coberturas y la emisión de la póliza corresponden a cada
                aseguradora.
              </p>
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