"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/site";

interface FAQProps { injectSchema?: boolean; }

export default function FAQ({ injectSchema = false }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="container py-20 md:py-24">
      {injectSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-2xl text-accent">Got questions?</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mt-1">Here's the answers</h2>
        <p className="text-foreground/75 mt-4">The most common things Niagara homeowners and businesses ask us.</p>
      </div>
      <div className="max-w-3xl mx-auto stamp-card px-6 md:px-8 divide-y divide-foreground/10">
        {FAQS.map((item, i) => (
          <div key={item.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left font-display text-lg text-primary"
              aria-expanded={open === i}
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`text-foreground/80 text-base leading-relaxed overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}
              aria-hidden={open !== i}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
