"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { articles, getReadingMinutes } from "@/content/articles";

export function BlogCarousel() {
  const [active, setActive] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const lastInteraction = useRef(0);
  const [touching, setTouching] = useState(false);
  const [visible, setVisible] = useState(false);
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
    const element = viewport.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.5 });
    observer.observe(element);
    const resize = new ResizeObserver(() => {
      element.scrollTo({ left: activeIndex.current * element.clientWidth, behavior: "instant" });
    });
    resize.observe(element);
    return () => { observer.disconnect(); resize.disconnect(); };
  }, []);

  useEffect(() => {
    if (hovered || focused || touching || reducedMotion || !visible) return;
    const timer = window.setInterval(() => {
      const element = viewport.current;
      if (!element || document.hidden || Date.now() - lastInteraction.current < 3000) return;
      const next = (activeIndex.current + 1) % articles.length;
      element.scrollTo({ left: next * element.clientWidth, behavior: "smooth" });
    }, 3000);
    return () => window.clearInterval(timer);
  }, [hovered, focused, touching, reducedMotion, visible]);

  function navigate(index: number) {
    const element = viewport.current;
    if (!element) return;
    lastInteraction.current = Date.now();
    const next = (index + articles.length) % articles.length;
    element.scrollTo({ left: next * element.clientWidth, behavior: reducedMotion ? "instant" : "smooth" });
  }

  return (
    <section id="blog" className="fundia-blog-section px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="blog-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div><p className="eyebrow">IDEAS PARA DECIDIR MEJOR</p><h2 id="blog-heading" className="section-heading mt-4">Tu protección empieza<br className="hidden sm:block" /> por entenderla.</h2></div>
          <p className="max-w-sm leading-7 text-muted-foreground">Resolvemos preguntas sobre salud, vida, retiro y patrimonio. Una lectura a la vez.</p>
        </div>
        <div role="region" aria-roledescription="carrusel" aria-label="Artículos de Fundia Seguros" onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <p id="blog-gesture-hint" className="mb-4 text-sm text-muted-foreground">Desliza para explorar los artículos.</p>
          <div ref={viewport} className="blog-carousel-window" tabIndex={0} aria-label="Explorar artículos" aria-describedby="blog-gesture-hint"
            onPointerDown={() => { setTouching(true); lastInteraction.current = Date.now(); }}
            onPointerUp={() => { setTouching(false); lastInteraction.current = Date.now(); }}
            onPointerCancel={() => { setTouching(false); lastInteraction.current = Date.now(); }}
            onWheel={() => { lastInteraction.current = Date.now(); }}
            onScroll={(event) => {
              const element = event.currentTarget;
              const index = Math.max(0, Math.min(articles.length - 1, Math.round(element.scrollLeft / element.clientWidth)));
              activeIndex.current = index;
              setActive(index);
            }}
            onKeyDown={(event) => {
              if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
              event.preventDefault();
              navigate(event.key === "Home" ? 0 : event.key === "End" ? articles.length - 1 : activeIndex.current + (event.key === "ArrowRight" ? 1 : -1));
            }}>
            <div className="blog-carousel-track">
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
            <span className="text-xs tabular-nums text-muted-foreground">{String(active + 1).padStart(2, "0")} / {String(articles.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
