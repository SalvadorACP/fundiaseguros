"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { teamMembers } from "@/content/team";

export function TeamPreview() {
  const [active, setActive] = useState(0);
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
    if (teamMembers.length < 2 || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((index) => (index + 1) % teamMembers.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [hovered, focused, reducedMotion]);

  return (
    <aside className="team-preview" aria-labelledby="team-preview-heading">
      <h2 id="team-preview-heading" className="eyebrow">EL EQUIPO DETRÁS DE FUNDIA</h2>
      <div role="region" aria-roledescription="carrusel" aria-label="Fotografías del equipo de Fundia"
        onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="team-preview-gallery">
        <ul className="team-preview-list" style={{ transform: `translateX(-${active * 100}%)` }}>
          {teamMembers.map((member, index) => (
            <li key={member.id} inert={index !== active} aria-hidden={index !== active}>
              <Link href={`/equipo#${member.id}`} className="team-preview-member" aria-label={`Conoce a ${member.name}, ${member.role}`}>
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  sizes="(min-width: 1440px) 411px, (min-width: 1024px) 32vw, (min-width: 640px) 80vw, 85vw"
                  className="h-auto w-full"
                  priority={index === 0}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {teamMembers.length > 1 && <div className="mt-2 flex justify-center gap-2" aria-label="Seleccionar integrante">
        {teamMembers.map((member, index) => <button key={member.id} type="button" className="blog-dot" aria-label={`Ver a ${member.name}`} aria-pressed={index === active} onClick={() => setActive(index)}><span /></button>)}
      </div>}
      </div>
      <Link href="/equipo" className="button-primary mt-5 w-full text-sm">
        Conoce a nuestro equipo <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </aside>
  );
}
