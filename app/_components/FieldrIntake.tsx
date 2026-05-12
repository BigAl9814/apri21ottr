"use client";

type Props = {
  slug: string;
  className?: string;
};

export default function FieldrIntake({ slug, className }: Props) {
  return (
    <div className={className}>
      <iframe
        src={`https://www.fieldr.ca/intake/${slug}`}
        width="100%"
        style={{ border: "none", minHeight: "600px" }}
        title="Book a Service Request"
        loading="lazy"
      />
    </div>
  );
}
