"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";

type Product = "auto" | "vida" | "gastos-medicos";
const medicalOptions = [
  "Actualmente YA CUENTO con SGMM y me gustaría cotizar una RENOVACIÓN con GNP Seguros",
  "Me interesa una asesoría desde 0 porque NO CONOZCO nada del Seguro de Gastos Médicos Mayores",
  "NO CONOZCO nada pero me interesa saber solo CUÁNTO CUESTA",
  "Ya CONOZCO un POCO sobre el Seguro de Gastos Médicos Mayores y me gustaría cotizar",
];
const titles = { auto: "Cotiza tu seguro para Auto / Pick Up / Moto", vida: "Cotiza AHORA tu Seguro de Vida", "gastos-medicos": "Cotiza tu Seguro de Gastos Médicos" };
const rc = "Responsabilidad Civil - Daños a terceros";
const whatsapp = (message: string) => `${siteConfig.contact.whatsapp.split("?")[0]}?text=${encodeURIComponent(message)}`;

function Field({ label, name = label, type = "text", required = true, maxLength = 100 }: { label: string; name?: string; type?: string; required?: boolean; maxLength?: number }) {
  return <label className="quote-field">{label}<input name={name} type={type} required={required} maxLength={maxLength} min={type === "number" ? 0 : undefined} max={type === "number" ? 120 : undefined} step={type === "number" ? 1 : undefined} pattern={type === "tel" ? "[+0-9 ()-]{10,20}" : label.includes("postal") ? "[0-9]{5}" : undefined} /></label>;
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value?: string; onChange?: (value: string) => void }) {
  return <label className="quote-field">{label}<select name={label} required value={value} onChange={onChange ? (event) => onChange(event.target.value) : undefined} defaultValue={value === undefined ? "" : undefined}><option value="" disabled>Selecciona una opción</option>{options.map((option) => <option key={option}>{option}</option>)}</select></label>;
}

export function QuoteForm({ product }: { product: Product }) {
  const [situation, setSituation] = useState("");
  const [origin, setOrigin] = useState("");
  const [year, setYear] = useState("");
  const [coverage, setCoverage] = useState("");
  const [amount, setAmount] = useState("");
  const [disease, setDisease] = useState("");
  const [people, setPeople] = useState("");
  const [otherCount, setOtherCount] = useState(7);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const summaryRef = useRef<HTMLHeadingElement>(null);
  const shortMedical = product === "gastos-medicos" && (situation === medicalOptions[0] || situation === medicalOptions[1]);
  const ready = product !== "gastos-medicos" || situation !== "";
  const count = people === "Otro" ? otherCount : Number(people);

  function review(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const intro = product === "gastos-medicos"
      ? situation === medicalOptions[0] ? `Me interesa renovar mi SGMM y actualmente estoy con ${data.get("Aseguradora actual")}.`
      : situation === medicalOptions[1] ? "Me interesa recibir asesoría desde cero sobre el Seguro de Gastos Médicos Mayores."
      : situation === medicalOptions[2] ? "No me interesa asesoría, solo saber cuánto cuesta."
      : medicalOptions[3] : `SOLICITUD DE COTIZACIÓN — SEGURO DE ${product.toUpperCase()}`;
    const rows = [...data.entries()].filter(([key, value]) => !["consentimiento", "Situación", "Aseguradora actual"].includes(key) && String(value).trim()).map(([key, value]) => `${key}: ${String(value).trim()}`);
    setMessage([intro, ...rows].join("\n\n"));
    setCopied(false);
    requestAnimationFrame(() => summaryRef.current?.focus());
  }

  return <main className="min-h-screen px-5 py-10 sm:px-10">
    <div className="mx-auto max-w-3xl">
      <Link href="/#seguros" className="font-semibold underline underline-offset-4">← Volver a los seguros</Link>
      <p className="eyebrow mt-10">FUNDIA SEGUROS · COTIZACIÓN PERSONALIZADA</p>
      <h1 className="section-heading mt-4">{titles[product]}</h1>
      <p className="mt-6 leading-7 text-muted-foreground">{product === "vida" ? <>Para proporcionarte una <strong>asesoría personalizada</strong> ayúdanos a conocerte un poco más.</> : product === "auto" ? "Recibe una cotización y asesoría personalizada. Todos los datos solicitados son necesarios para su cotización en distintas aseguradoras; si omite alguno no podremos cotizarle." : "Recibe atención de calidad en hospitales privados por accidente o enfermedad. La protección está sujeta a las coberturas y condiciones de la póliza."}</p>
      <p className="mt-3 text-sm leading-6">Trataremos tus datos conforme a nuestro aviso de privacidad. Para consultarlo da <Link href="/aviso-de-privacidad" target="_blank" className="font-bold underline">clic aquí</Link>.</p>
      <form ref={formRef} onSubmit={review} className="quote-panel mt-8" hidden={!!message}>
        {product === "gastos-medicos" && <fieldset className="grid gap-3"><legend className="mb-4 font-semibold leading-7">Para darte una atención más personalizada y especializada, selecciona con honestidad la opción que más se adapte a tu situación.</legend>{medicalOptions.map((option) => <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-primary/20 p-4 text-sm leading-6"><input type="radio" name="Situación" value={option} checked={situation === option} onChange={() => setSituation(option)} className="mt-1 size-4 shrink-0" /><span>{option}</span></label>)}</fieldset>}
        {shortMedical && situation === medicalOptions[0] && <Field label="¿Con qué aseguradora tienes actualmente tu SGMM?" name="Aseguradora actual" />}
        {ready && !shortMedical && <>
          <h2 className="quote-heading">Tus datos de contacto</h2>
          <Field label="Nombre completo" /><Field label="Teléfono" type="tel" />
          {product === "vida" && <>
            <Field label="Edad" type="number" />
            <Select label="¿Durante cuánto tiempo te gustaría estar tranquilo/a?" options={["10 años", "15 años", "20 años", "30 años"]} />
            <Select label="Si el día de mañana faltaras en tu familia, ¿qué cantidad de dinero crees que necesitarían para salir adelante durante los próximos 5 años?" options={[...Array.from({ length: 10 }, (_, i) => `$${((i + 1) * 1000000).toLocaleString("en-US")}`), "Otra"]} value={amount} onChange={setAmount} />
            {amount === "Otra" && <Field label="Otra cantidad (MXN)" />}
            <Select label="¿Padeces actualmente alguna enfermedad?" options={["Ninguna", "Diabetes", "Hipertensión", "Cáncer", "VIH", "Otra"]} value={disease} onChange={setDisease} />
            {disease === "Otra" && <Field label="¿Cuál enfermedad?" maxLength={300} />}
            <label className="quote-field">Razón por la cual te interesa el seguro de vida / Comentarios adicionales (opcional)<textarea name="Comentarios adicionales" maxLength={500} rows={4} /></label>
          </>}
          {product === "auto" && <>
            <h2 className="quote-heading">Información de la unidad</h2>
            <Select label="Tipo de unidad" options={["Auto", "Pick Up", "Moto"]} />
            <Select label="Uso de la unidad" options={["Particular", "Reparto de alimentos", "Chofer de App/Plataformas", "Carga/Trabajo"]} />
            <Select label="Procedencia de la unidad" options={["Nacional (Factura de Agencia)", "Legalizado (Decreto o Aduana)"]} value={origin} onChange={setOrigin} />
            {origin.startsWith("Legalizado") && <div className="quote-notice"><p>Para cotizar las unidades extranjeras es necesario proporcionar el número de serie o foto de la tarjeta de circulación, ya que las versiones y modelos extranjeros se cotizan de manera diferente.</p><p className="mt-3">Si deseas enviar foto de la tarjeta de circulación por WhatsApp, <a className="font-bold underline" href={whatsapp("Hola Fundia Seguros, deseo cotizar una unidad legalizada. Enviaré una foto de mi tarjeta de circulación.")} target="_blank" rel="noopener noreferrer">da clic aquí</a>. Adjunta la fotografía manualmente en WhatsApp.</p><Field label="Número de serie (opcional si enviarás la fotografía)" name="Número de serie" required={false} maxLength={25} /></div>}
            <Field label="Marca" /><Field label="Submarca" />
            <Select label="Año/Modelo" options={Array.from({ length: 38 }, (_, i) => String(2027 - i))} value={year} onChange={(value) => { setYear(value); setCoverage(Number(value) <= 2005 ? rc : ""); }} />
            {year && <Select label="Paquete de cobertura" options={Number(year) <= 2005 ? [rc] : ["Amplia", rc, "Limitada"]} value={coverage} onChange={setCoverage} />}
            <Field label="Versión exacta (la puedes consultar en tu factura)" />
            <Select label="¿Su auto es Standard o Automático?" options={["Standard", "Automático"]} />
            <Field label="Código postal donde circula la unidad" maxLength={5} />
          </>}
          {product === "gastos-medicos" && <>
            <Field label="Ciudad donde podría requerir atención médica" /><Field label="Código postal donde podría requerir atención médica" maxLength={5} />
            <Select label="¿Para cuántas personas te gustaría cotizar el seguro médico?" options={["1", "2", "3", "4", "5", "6", "Otro"]} value={people} onChange={setPeople} />
            {people === "Otro" && <label className="quote-field">Número de personas (7 a 20)<input name="Número de personas" type="number" min={7} max={20} required value={otherCount} onChange={(e) => setOtherCount(Number(e.target.value))} /></label>}
            {Array.from({ length: Math.min(20, Math.max(0, count)) }, (_, i) => <fieldset className="quote-person" key={i}><legend>Persona {i + 1}</legend><Field label="Nombre" name={`Persona ${i + 1} — Nombre`} /><Field label="Edad actual" name={`Persona ${i + 1} — Edad`} type="number" /></fieldset>)}
            <Select label="¿Actualmente padece alguna enfermedad?" options={["Sí", "No"]} value={disease} onChange={setDisease} />
            <label className="quote-field">¿Cuál? Indica también a qué persona corresponde.<input name="Enfermedad y persona" disabled={disease !== "Sí"} required={disease === "Sí"} maxLength={300} /></label>
          </>}
          {product !== "vida" && <><Select label="Forma de pago" options={product === "auto" ? ["Anual", "Semestral", "Trimestral", "Mensual domiciliado a nómina o débito"] : ["Anual", "Semestral", "Trimestral", "Mensual"]} />{product === "auto" && <p className="quote-notice"><strong>Anual · Opción más recomendada.</strong> Ahorra recargos por pago fraccionado y consulta las opciones de 3, 6 o 12 MSI con tarjeta de crédito, sujetas a disponibilidad de la aseguradora y el banco.</p>}</>}
        </>}
        {ready && <><label className="flex items-start gap-3 text-sm leading-6"><input type="checkbox" name="consentimiento" required className="mt-1 size-5 shrink-0" /><span>He leído el <Link href="/aviso-de-privacidad" target="_blank" className="underline">aviso de privacidad</Link> y autorizo compartir con Fundia Seguros por WhatsApp los datos proporcionados, incluidos los de salud cuando corresponda, para atender esta solicitud.</span></label><button className="button-primary" type="submit">{shortMedical ? "Preparar solicitud" : "Revisar cotización"}</button></>}
      </form>
      {message && <section className="quote-panel mt-8"><h2 tabIndex={-1} ref={summaryRef} className="quote-heading">Revisa tu solicitud</h2><pre className="whitespace-pre-wrap break-words font-sans text-sm leading-7">{message}</pre><p className="text-sm leading-6">Se abrirá WhatsApp con este mensaje. Revisa la conversación y pulsa Enviar para hacerlo llegar a Fundia.</p>{whatsapp(message).length <= 7500 ? <a className="button-primary" href={whatsapp(message)} target="_blank" rel="noopener noreferrer">Solicitar cotización por WhatsApp</a> : <><p>Por su extensión, copia la solicitud y pégala en WhatsApp.</p><button className="button-secondary" type="button" onClick={async () => { try { await navigator.clipboard.writeText(message); setCopied(true); } catch { setCopied(false); } }}>Copiar solicitud</button><p role="status">{copied ? "Solicitud copiada." : "También puedes seleccionar y copiar el resumen manualmente."}</p><a className="button-primary" href={siteConfig.contact.whatsapp.split("?")[0]} target="_blank" rel="noopener noreferrer">Abrir WhatsApp</a></>}<button type="button" className="button-secondary" onClick={() => { setMessage(""); requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement | HTMLSelectElement>("input, select")?.focus()); }}>Editar respuestas</button></section>}
    </div>
  </main>;
}
