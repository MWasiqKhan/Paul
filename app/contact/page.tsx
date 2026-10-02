import type { Metadata } from "next";
import { Contact, Newsletter, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Paul Gonave Tirogène pour les publications, conférences et collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        tag="§ 06 — Contact"
        title="Échangeons"
        lede="Publications, conférences, collaborations ou échanges autour de l'éducation et du développement."
      />
      <Contact />
      <Newsletter />
    </>
  );
}
