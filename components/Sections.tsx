import Link from "next/link";
import type { ReactNode } from "react";
import { books, concepts, contact, quotes, reflections, type Book } from "@/lib/content";
import { NewsletterForm, ContactForm } from "./Forms";
import { BookPlate, Cachet, d, Misreg, PhotoPlate } from "./Ui";

const featuredBook = books[0];

/* ---------- § 01 — hero (home) ---------- */
export function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-inner">
        <p className="tag tag--light hero-in" style={d(0)}>§ 01 — Accueil</p>

        <Misreg as="h1" light className="hero-in" style={d(1)}>
          L&apos;éducation,<br />fondement du progrès<br />et du développement
        </Misreg>

        <p className="lede lede--light hero-in" style={d(2)}>
          Découvrez l&apos;œuvre de Paul Gonave Tirogène, un auteur engagé qui explore le rôle essentiel de l&apos;éducation dans la transformation de l&apos;être humain et de la société.
        </p>

        <div className="btn-row hero-in" style={d(3)}>
          <Link href="/livres" className="btn btn--gold">Découvrir les livres</Link>
          <Link href="/a-propos" className="btn btn--ghost-dark">À propos de l&apos;auteur</Link>
        </div>

        <div className="hero-collage">
          <div className="hero-portrait">
            <PhotoPlate label="Portrait de Paul Gonave Tirogène" preload />
          </div>
          <div className="hero-book">
            <BookPlate title={featuredBook.title} cover={featuredBook.cover} preload sizes="(max-width: 760px) 84vw, 560px" />
          </div>
          <Cachet id="circ-hero" variant="hero" innerRing text="ÉDUCATION · PROGRÈS · DÉVELOPPEMENT · HUMANITÉ · " />
        </div>
      </div>
      <a href="#fondements" className="scroll-cue">Défiler</a>
    </section>
  );
}

/* ---------- inner page hero ---------- */
export function PageHero({ tag, title, lede, crumbs }: { tag: string; title: ReactNode; lede?: string; crumbs: { href?: string; label: string }[] }) {
  return (
    <section className="hero page-hero">
      <div className="hero-inner">
        <nav className="crumbs hero-in" style={d(0)} aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span className="crumbs-sep" aria-hidden="true">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <p className="tag tag--light hero-in" style={d(1)}>{tag}</p>
        <Misreg as="h1" light className="hero-in" style={d(2)}>{title}</Misreg>
        {lede && <p className="lede lede--light hero-in" style={d(3)}>{lede}</p>}
      </div>
    </section>
  );
}

/* ---------- § 02 — fondements ---------- */
export function Fondements() {
  return (
    <section className="fondements" id="fondements">
      <div className="section-inner">
        <p className="tag">§ 02 — Fondements</p>
        <div className="concepts">
          {concepts.map((c, i) => (
            <div key={c.num} className={`concept${i === 1 ? " concept--drop" : ""}`} data-reveal style={d(i)}>
              <span className="concept-num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- § 03 — about ---------- */
export function About() {
  return (
    <section className="about" id="a-propos">
      <div className="section-inner about-grid">
        <div className="about-photo" data-reveal>
          <PhotoPlate label="Photo de Paul Gonave Tirogène" />
          <span className="about-watermark" aria-hidden="true">02</span>
        </div>

        <div className="about-copy" data-reveal style={d(1)}>
          <p className="tag">§ 03 — À propos</p>
          <Misreg>À propos de l&apos;auteur</Misreg>

          <p className="body-copy">Paul Gonave Tirogène est un auteur et penseur dont les œuvres portent une réflexion profonde sur l&apos;éducation, le développement humain et la transformation sociale.</p>
          <p className="body-copy">À travers ses écrits, il analyse les défis qui empêchent le progrès des sociétés et présente l&apos;éducation comme un outil fondamental pour former des individus capables de penser, créer, entreprendre et contribuer positivement à l&apos;humanité.</p>
          <p className="body-copy">Son message repose sur une conviction essentielle&nbsp;: une société ne peut progresser durablement sans une éducation de qualité.</p>

          <blockquote className="pull-quote">
            <span className="pull-quote-mark" aria-hidden="true">&ldquo;</span>
            <p>Un homme très éduqué, instruit, talentueux et cultivant les qualités du progrès et du développement peut certainement changer, en bien, tout un pays et même la face du monde.</p>
            <cite>— Paul Gonave TIROGÈNE</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ---------- § 04 — featured book ---------- */
export function Featured() {
  return (
    <section className="featured" id="livres">
      <div className="section-inner featured-grid">
        <div className="featured-cover" data-reveal>
          <span className="featured-watermark" aria-hidden="true">03</span>
          <BookPlate
            title={featuredBook.title}
            cover={featuredBook.cover}
            size="large"
            label="Couverture — Une Éducation Pour Le Progrès et Le Développement, Une Collection, Avril 2023, Paul Gonave Tirogène"
          />
          <Cachet id="circ-book" variant="book" text="OUVRAGE PHARE · ÉDITION ORIGINALE · " />
        </div>

        <div className="featured-copy" data-reveal style={d(1)}>
          <p className="tag">§ 04 — Ouvrage phare</p>
          <Misreg>Une Éducation Pour<br />Le Progrès et Le<br />Développement</Misreg>

          {featuredBook.body!.map((p) => (
            <p key={p} className="body-copy">{p}</p>
          ))}

          <div className="btn-row">
            {/* Placeholder links, as in the original design — point these at the store / excerpt once available. */}
            <a href="#" className="btn btn--gold">Acheter le livre</a>
            <a href="#" className="btn btn--ghost-light">Lire un extrait</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- § 05 — book collection ---------- */
export function BookLedger({ list = books, tag = "§ 05 — Livres", title = "Les livres de l'auteur" }: { list?: Book[]; tag?: string; title?: string }) {
  return (
    <section className="ledger" id="collection">
      <div className="section-inner">
        <p className="tag">{tag}</p>
        <Misreg>{title}</Misreg>

        <div className="ledger-list">
          {list.map((b) => (
            <article key={b.slug} className="ledger-row" data-reveal>
              <span className="ledger-num">{String(books.indexOf(b) + 1).padStart(2, "0")}</span>
              <div className="ledger-thumb">
                <BookPlate title={b.title} cover={b.cover} size="tiny" sizes="240px" />
              </div>
              <div className="ledger-text">
                <h3>{b.title}</h3>
                <p>{b.summary}</p>
              </div>
              <Link href={`/livres/${b.slug}`} className="link-arrow">En savoir plus</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- § 06 — vision ---------- */
export function Vision() {
  return (
    <section className="vision">
      <p className="tag tag--light vision-tag" data-reveal>§ 06 — Vision</p>
      <div className="vision-inner" data-reveal style={d(1)}>
        <Misreg light>La vision de l&apos;auteur</Misreg>
        <p className="lede lede--light">L&apos;éducation ne consiste pas uniquement à transmettre des connaissances. Elle doit permettre à l&apos;être humain de développer son intelligence, sa créativité, son esprit critique et ses qualités morales.</p>
        <p className="lede lede--light">Une véritable éducation forme des citoyens capables de participer activement au progrès et au développement de leur société.</p>
      </div>
      <Cachet id="circ-vision" variant="vision" text="UNE VÉRITABLE ÉDUCATION · UN VÉRITABLE PROGRÈS · " />
    </section>
  );
}

/* ---------- § 07 — reflections ---------- */
export function Reflections({ list = reflections, tag = "§ 07 — Réflexions", title = "Réflexions et idées" }: { list?: typeof reflections; tag?: string; title?: string }) {
  return (
    <section className="ledger ledger--alt" id="reflexions">
      <div className="section-inner">
        <p className="tag">{tag}</p>
        <Misreg>{title}</Misreg>

        <div className="ledger-list">
          {list.map((r) => (
            <article key={r.slug} className="ledger-row ledger-row--article" data-reveal>
              <span className="ledger-num">{String(reflections.indexOf(r) + 1).padStart(2, "0")}</span>
              <div className="ledger-text">
                <h3>{r.title}</h3>
                <p>{r.summary}</p>
              </div>
              <Link href={`/reflexions/${r.slug}`} className="link-arrow">Lire l&apos;article</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- § 08 — quotes ---------- */
export function Paroles() {
  return (
    <section className="paroles" id="publications">
      <div className="section-inner">
        <p className="tag">§ 08 — Paroles</p>
        <div className="paroles-grid">
          {quotes.map((q, i) => (
            <blockquote key={q} className={`parole${i === 1 ? " parole--drop" : ""}`} data-reveal style={d(i)}>
              <span className="parole-mark" aria-hidden="true">&ldquo;</span>
              <p>{q}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- § 09 — newsletter ---------- */
export function Newsletter() {
  return (
    <section className="newsletter" id="newsletter">
      <div className="section-inner newsletter-inner" data-reveal>
        <p className="tag tag--light">§ 09 — Newsletter</p>
        <Misreg light>Rejoignez la communauté</Misreg>
        <p className="lede lede--light">Recevez les dernières actualités, les nouvelles publications et les réflexions de Paul Gonave Tirogène directement dans votre boîte mail.</p>
        <NewsletterForm />
      </div>
    </section>
  );
}

/* ---------- § 10 — contact ---------- */
export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-inner contact-grid">
        <div className="contact-info" data-reveal>
          <p className="tag">§ 10 — Contact</p>
          <Misreg>Contact</Misreg>
          <p className="body-copy">Pour toute demande concernant les publications, les conférences, les collaborations ou les échanges autour de l&apos;éducation et du développement, n&apos;hésitez pas à nous contacter.</p>

          <ul className="contact-details">
            <li><span className="contact-label">Email</span><span>{contact.email}</span></li>
            <li><span className="contact-label">Téléphone</span><span>{contact.phone}</span></li>
            <li><span className="contact-label">Réseaux</span><span>{contact.social}</span></li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
