import Link from "next/link";
import { Misreg } from "@/components/Ui";

export default function NotFound() {
  return (
    <section className="hero page-hero">
      <div className="hero-inner">
        <p className="tag tag--light hero-in">§ 404</p>
        <Misreg as="h1" light className="hero-in" style={{ "--d": 1 } as React.CSSProperties}>Page introuvable</Misreg>
        <p className="lede lede--light hero-in" style={{ "--d": 2 } as React.CSSProperties}>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
        <div className="btn-row hero-in" style={{ "--d": 3 } as React.CSSProperties}>
          <Link href="/" className="btn btn--gold">Retour à l&apos;accueil</Link>
        </div>
      </div>
    </section>
  );
}
