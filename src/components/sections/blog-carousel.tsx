"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play, BookOpen } from "lucide-react";
import { articles, getReadingMinutes } from "@/content/articles";

export function BlogCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % articles.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, reducedMotion]);

  function navigate(index: number) {
    setActive((index + articles.length) % articles.length);
    setPaused(true);
  }

  return (
    <section id="blog" className="fundia-blog-section px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="eyebrow">IDEAS PARA DECIDIR MEJOR</p><h2 id="blog-heading" className="section-heading mt-4">Tu protección empieza<br className="hidden sm:block" /> por entenderla.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">Resolvemos preguntas sobre salud, vida, retiro y patrimonio. Una lectura a la vez.</p>
        </div>
        <div role="region" aria-roledescription="carrusel" aria-label="Artículos de Fundia Seguros" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <div className="blog-carousel-window">
            <div className="blog-carousel-track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {articles.map((article, index) => <article className="blog-slide" key={article.slug} inert={index !== active} aria-hidden={index !== active} aria-roledescription="diapositiva" aria-label={`${index + 1} de ${articles.length}`}>
                <Link href={`/blog/${article.slug}`} className="blog-feature-card">
                  <div className="blog-card-cover" aria-hidden="true"><BookOpen size={34} strokeWidth={1.3} /><span className="blog-card-category">{article.category}</span><span className="blog-card-number">0{index + 1}</span><span className="blog-card-wordmark">FUNDIA <span>LECTURAS</span></span></div>
                  <div className="blog-card-copy"><div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground"><span>{article.category}</span><span aria-hidden="true">·</span><span>{getReadingMinutes(article)} min de lectura</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="blog-read-link">Leer artículo <ArrowRight size={18} aria-hidden="true" /></span></div>
                </Link>
              </article>)}
            </div>
          </div>
          <div className="blog-carousel-controls">
            <div className="flex items-center gap-2" aria-label="Seleccionar artículo">{articles.map((article, index) => <button type="button" className="blog-dot" key={article.slug} aria-label={`Ver artículo ${index + 1}: ${article.title}`} aria-pressed={active === index} onClick={() => navigate(index)}><span /></button>)}</div>
            <div className="flex items-center gap-2"><span className="mr-2 text-xs tabular-nums text-muted-foreground">{String(active + 1).padStart(2, "0")} / 05</span>{!reducedMotion && <button type="button" className="blog-control" aria-label={paused ? "Reanudar movimiento automático" : "Pausar movimiento automático"} onClick={() => setPaused((value) => !value)}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}<button type="button" className="blog-control" aria-label="Artículo anterior" onClick={() => navigate(active - 1)}><ArrowLeft size={18} /></button><button type="button" className="blog-control" aria-label="Artículo siguiente" onClick={() => navigate(active + 1)}><ArrowRight size={18} /></button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
