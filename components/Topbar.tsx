"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";

export default function Topbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 40);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`topbar${scrolled ? " scrolled" : ""}`} id="topbar">
      <div className="topbar-inner">
        <Link href="/" className="topbar-brand">P.&nbsp;G.&nbsp;Tirogène</Link>

        <nav className={`main-nav${open ? " open" : ""}`} id="main-nav">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : undefined}
              style={{ "--i": i } as React.CSSProperties}
              onClick={() => setOpen(false)}
            >
              <em>{l.num}</em>
              {l.label}
            </Link>
          ))}
        </nav>

        <a href="#newsletter" className="btn btn--ghost-dark btn--small topbar-cta">Newsletter</a>

        <button
          className={`menu-toggle${open ? " active" : ""}`}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className="topbar-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
