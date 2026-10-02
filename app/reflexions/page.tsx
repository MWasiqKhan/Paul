import type { Metadata } from "next";
import { Newsletter, PageHero, Paroles, Reflections } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Réflexions",
  description: "Réflexions et idées de Paul Gonave Tirogène sur l'éducation, l'enseignement et les générations futures.",
};

export default function ReflexionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Réflexions" }]}
        tag="§ 04 — Réflexions"
        title="Réflexions et idées"
        lede="Des textes courts sur l'éducation, le rôle de l'enseignant et la formation des générations futures."
      />
      <Reflections tag="§ 07 — Articles" title="Tous les articles" />
      <Paroles />
      <Newsletter />
    </>
  );
}
