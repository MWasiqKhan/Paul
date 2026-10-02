import type { Metadata } from "next";
import { About, Fondements, Newsletter, PageHero, Paroles, Vision } from "@/components/Sections";

export const metadata: Metadata = {
  title: "À propos",
  description: "Paul Gonave Tirogène, auteur et penseur : une réflexion profonde sur l'éducation, le développement humain et la transformation sociale.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "À propos" }]}
        tag="§ 02 — À propos"
        title="Paul Gonave Tirogène"
        lede="Auteur et penseur, convaincu qu'une société ne peut progresser durablement sans une éducation de qualité."
      />
      <About />
      <Fondements />
      <Vision />
      <Paroles />
      <Newsletter />
    </>
  );
}
