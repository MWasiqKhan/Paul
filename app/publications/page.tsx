import type { Metadata } from "next";
import { BookLedger, Newsletter, PageHero, Paroles } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Publications",
  description: "Paroles et publications de Paul Gonave Tirogène.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Publications" }]}
        tag="§ 05 — Publications"
        title="Paroles et publications"
        lede="Les mots de l'auteur et l'ensemble de ses ouvrages publiés."
      />
      <Paroles />
      <BookLedger tag="§ — Ouvrages publiés" title="Les livres de l'auteur" />
      <Newsletter />
    </>
  );
}
