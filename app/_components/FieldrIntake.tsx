"use client";
import Script from "next/script";
type Props = {
  slug: string;
  className?: string;
};
export default function FieldrIntake({ slug, className }: Props) {
  return (
    <div className={className}>
      <div id="fieldr-intake" />
      <Script
        src="https://www.fieldr.ca/embed/intake.js"
        data-slug={slug}
        data-target="#fieldr-intake"
        strategy="afterInteractive"
      />
    </div>
  );
}
