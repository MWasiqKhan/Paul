import type { Metadata } from "next";
import { BookLedger, Featured, Newsletter, PageHero } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Livres",
  description: "Les livres de Paul Gonave Tirogène sur l'éducation, la gouvernance et le développement humain.",
};

export default function LivresPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Livres" }]}
        tag="§ 03 — Livres"
        title="Les livres de l'auteur"
        lede="Des ouvrages qui placent l'éducation au cœur de la transformation de l'être humain et de la société."
      />
      <Featured />
      <BookLedger tag="§ 05 — Collection" title="Tous les ouvrages" />
      <Newsletter />
    </>
  );
}
