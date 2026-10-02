import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { books } from "@/lib/content";
import { BookLedger, Newsletter } from "@/components/Sections";
import { BookPlate, Cachet, d, Misreg } from "@/components/Ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  return book ? { title: book.title, description: book.summary } : {};
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();
  const num = String(books.indexOf(book) + 1).padStart(2, "0");

  return (
    <>
      <section className="featured book-detail">
        <div className="section-inner featured-grid">
          <div className="featured-cover hero-in" style={d(2)}>
            <BookPlate title={book.title} cover={book.cover} size="large" preload />
            <Cachet id="circ-detail" variant="book" text="PAUL GONAVE TIROGÈNE · ÉDUCATION · " />
          </div>

          <div className="featured-copy">
            <nav className="crumbs hero-in" style={d(0)} aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span className="crumbs-sep" aria-hidden="true">/</span>
              <Link href="/livres">Livres</Link>
              <span className="crumbs-sep" aria-hidden="true">/</span>
              <span>Ouvrage {num}</span>
            </nav>
            <p className="tag hero-in" style={d(1)}>Ouvrage {num}</p>
            <Misreg as="h1" className="hero-in" style={d(2)}>{book.title}</Misreg>

            <div className="hero-in" style={d(3)}>
              {(book.body ?? [book.summary]).map((p) => (
                <p key={p} className="body-copy">{p}</p>
              ))}
            </div>

            <div className="btn-row hero-in" style={d(4)}>
              <a href="#" className="btn btn--gold">Acheter le livre</a>
              <Link href="/contact" className="btn btn--ghost-dark">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
      <BookLedger list={books.filter((b) => b !== book)} tag="§ — Collection" title="Autres ouvrages" />
      <Newsletter />
    </>
  );
}
