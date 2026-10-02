import Link from "next/link";

/** Fixed left book-spine: emblem, vertical motto, and the year in roman numerals. */
export default function Spine() {
  return (
    <aside className="spine">
      <Link href="/" className="spine-emblem" aria-label="Retour à l'accueil">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="50" y="61" textAnchor="middle">PT</text>
        </svg>
      </Link>
      <div className="spine-word">
        <span>Paul Gonave Tirogène — Éducation · Progrès · Développement · Humanité</span>
      </div>
      <span className="spine-foot">MMXXV</span>
    </aside>
  );
}
