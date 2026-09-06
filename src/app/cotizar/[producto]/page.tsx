import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";

export function generateStaticParams() {
  return ["auto", "gastos-medicos", "vida"].map((producto) => ({ producto }));
}

export default async function QuotePage({ params }: { params: Promise<{ producto: string }> }) {
  const { producto } = await params;
  if (producto !== "auto" && producto !== "gastos-medicos" && producto !== "vida") notFound();
  return <QuoteForm product={producto} />;
}
