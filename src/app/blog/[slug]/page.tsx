import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { articles, getReadingMinutes } from "@/content/articles";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig } from "@/config/site";

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, alternates: { canonical: `/blog/${slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt, url: `/blog/${slug}`, siteName: "Fundia Seguros", locale: "es_MX" } };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== slug).slice(0, 2);
  const message = `${siteConfig.contact.whatsapp.split("?")[0]}?text=${encodeURIComponent(`Hola Fundia Seguros, leí el artículo «${article.title}» y me gustaría recibir asesoría.`)}`;
  const structuredData = { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.excerpt, articleSection: article.category, inLanguage: "es-MX", author: { "@type": "Organization", name: "Fundia Seguros", url: "https://www.fundiaseguros.com/nosotros" }, publisher: { "@type": "Organization", name: "Fundia Seguros" }, mainEntityOfPage: `https://www.fundiaseguros.com/blog/${slug}` };
  return <><Header /><main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <header className="article-hero px-6 py-12 sm:px-10 sm:py-20 lg:px-16"><div className="mx-auto max-w-5xl"><Link href="/#blog" className="article-back"><ArrowLeft size={16} />Volver a las lecturas</Link><p className="article-eyebrow mt-10">{article.category} · {getReadingMinutes(article)} MIN DE LECTURA</p><h1>{article.title}</h1><p className="article-intro">{article.intro}</p><p className="mt-8 text-sm text-white/65">Por el equipo de Fundia Seguros</p></div></header>
    <div className="article-layout">
      <aside className="article-index" aria-label="En este artículo"><p className="eyebrow mb-5">EN ESTA LECTURA</p><ol>{article.sections.map((section, index) => <li key={section.title}><a href={`#seccion-${index + 1}`}>{section.title}</a></li>)}</ol></aside>
      <article className="article-body">{article.sections.map((section, index) => {
        const linkedArticle = section.relatedReading
          ? articles.find((item) => item.slug === section.relatedReading?.slug)
          : undefined;

        return <section key={section.title} id={`seccion-${index + 1}`}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          {section.table && <div className="article-table-scroll" role="region" aria-label={section.title} tabIndex={0}><table><caption className="sr-only">{section.title}</caption><thead><tr>{section.table.headings.map((heading) => <th key={heading} scope="col">{heading}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row">{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.relatedReading && linkedArticle && <p className="article-inline-reading">
            {section.relatedReading.prompt}{" "}
            <Link href={`/blog/${linkedArticle.slug}`}>{linkedArticle.title}</Link>
          </p>}
        </section>;
      })}
      {article.sources && <section className="article-sources"><h2>Para consultar</h2><ul>{article.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer">{source.title} ↗</a></li>)}</ul></section>}
      <section className="article-cta"><p className="eyebrow">EL SIGUIENTE PASO ES CONTIGO</p><h2>{article.cta}</h2><p>Cuéntanos qué quieres proteger. Nuestro equipo te orienta sobre las alternativas disponibles.</p>{article.quotePath ? <Link className="button-primary" href={article.quotePath}>Solicitar cotización <ArrowRight size={16} /></Link> : <a className="button-primary" href={message} target="_blank" rel="noopener noreferrer">Hablar con un asesor <ArrowRight size={16} /></a>}</section>
      <section className="article-related"><h2>Sigue explorando</h2><div>{related.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}><span>{item.category}</span><h3>{item.title}</h3><span className="inline-flex items-center gap-2">Leer artículo <ArrowRight size={16} /></span></Link>)}</div></section>
      </article>
    </div>
  </main><Footer /><WhatsAppButton /></>;
}
