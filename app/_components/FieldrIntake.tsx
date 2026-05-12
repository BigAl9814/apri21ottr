"use client";
import { useEffect, useRef } from "react";

type Props = {
  slug: string;
  className?: string;
};

export default function FieldrIntake({ slug, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const existing = document.querySelector('script[src="https://www.fieldr.ca/embed/intake.js"]');
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.src = "https://www.fieldr.ca/embed/intake.js";
    script.setAttribute("data-slug", slug);
    script.setAttribute("data-target", "#fieldr-intake");
    script.async = true;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, [slug]);

  return (
    <div className={className}>
      <div id="fieldr-intake" ref={ref} />
    </div>
  );
}
