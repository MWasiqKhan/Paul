import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/lib/content";
import { Cachet } from "./Ui";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Cachet id="circ-footer" variant="footer" innerRing text="ÉDUCATION · PROGRÈS · DÉVELOPPEMENT · HUMANITÉ · " />
      <div className="section-inner footer-inner">
        <h3>Paul Gonave TIROGÈNE</h3>
        <nav className="footer-nav">
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <p className="footer-copy">&copy; <Year /> Paul Gonave Tirogène — Tous droits réservés.</p>

        <div className="powered">
          <span className="powered-label">Powered by</span>
          <a href="https://fortunepublishers.com" target="_blank" rel="noopener" className="powered-logo">
            <Image
              src="/images/fortune-publishers-logo.png"
              alt="Fortune Publishers"
              width={1019}
              height={283}
              sizes="260px"
              quality={90}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
