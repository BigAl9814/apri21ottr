import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Ottr Plumr | Plumber Welland & Niagara Region" },
  description: "Ottr Plumr Plumbing & Heating — 187 King St, Welland, ON L3B 3J4. Licensed Niagara plumber serving St. Catharines, Niagara Falls, Welland and surrounding cities. Call 289-488-1007.",
  robots: { index: true, follow: true },
};

export default function NapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
