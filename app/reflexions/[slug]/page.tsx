import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { reflections } from "@/lib/content";
import { Newsletter, PageHero, Reflections } from "@/components/Sections";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return reflections.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = reflections.find((r) => r.slug === slug);
  return article ? { title: article.title, description: article.summary } : {};
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = reflections.find((r) => r.slug === slug);
  if (!article) notFound();
  const num = String(reflections.indexOf(article) + 1).padStart(2, "0");

  return (
    <>
      <PageHero
        crumbs={[{ href: "/reflexions", label: "Réflexions" }, { label: `Article ${num}` }]}
        tag={`§ 07 — Réflexion ${num}`}
        title={article.title}
        lede={article.summary}
      />
      <section className="article">
        <div className="section-inner article-inner" data-reveal>
          {/* The full text of this article has not been supplied yet. */}
          <p className="article-pending">Le texte intégral de cet article sera publié prochainement.</p>
          <Link href="/reflexions" className="link-arrow">Toutes les réflexions</Link>
        </div>
      </section>
      <Reflections list={reflections.filter((r) => r !== article)} tag="§ — À lire aussi" title="Autres réflexions" />
      <Newsletter />
    </>
  );
}
