import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

export const d = (i: number) => ({ "--d": i }) as CSSProperties;

/** Signature headline: ink face with an offset gold "misregistered" print beneath it. */
export function Misreg({
  as: Tag = "h2",
  light = false,
  className = "",
  style,
  children,
}: {
  as?: "h1" | "h2";
  light?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Tag className={`misreg${light ? " misreg--light" : ""} ${className}`.trim()} style={style}>
      <span className="misreg-shadow" aria-hidden="true">{children}</span>
      <span className="misreg-face">{children}</span>
    </Tag>
  );
}

/** Circular stamp with text running around the ring and the PT monogram. */
export function Cachet({
  id,
  text,
  variant,
  innerRing = false,
}: {
  id: string;
  text: string;
  variant: "hero" | "book" | "vision" | "footer";
  innerRing?: boolean;
}) {
  return (
    <div className={`cachet cachet--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 200 200">
        <defs>
          <path id={id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <g className="cachet-ring">
          <circle cx="100" cy="100" r="94" fill="none" stroke="currentColor" strokeWidth="1.5" />
          {innerRing && <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />}
          <text fontSize="10.5" letterSpacing="3" fill="currentColor">
            <textPath href={`#${id}`} startOffset="0%">{text}</textPath>
          </text>
        </g>
        <text x="100" y="112" textAnchor="middle" className="cachet-mono" fill="currentColor">PT</text>
      </svg>
    </div>
  );
}

/*
 * Plates are rotated and zoom on hover, which softens a 1:1 image. The `sizes` values below are
 * deliberately ~2x the rendered width so the browser picks a sharper source, served at quality 90.
 */
const QUALITY = 90;

export function PhotoPlate({ label, preload = false, sizes = "(max-width: 760px) 100vw, 820px" }: { label: string; preload?: boolean; sizes?: string }) {
  return (
    <div className="plate plate--photo" role="img" aria-label={label}>
      <Image src="/images/paul-gonave-tirogene.png" alt="" fill sizes={sizes} quality={QUALITY} preload={preload} />
    </div>
  );
}

export function BookPlate({
  title,
  cover,
  size,
  label,
  preload = false,
  sizes = "(max-width: 760px) 100vw, 700px",
}: {
  title: string;
  cover?: string;
  size?: "large" | "tiny";
  label?: string;
  preload?: boolean;
  sizes?: string;
}) {
  const cls = `plate plate--book${size ? ` plate--${size}` : ""}${cover ? " plate--cover" : ""}`;
  return cover ? (
    <div className={cls} role="img" aria-label={label ?? `Couverture — ${title}`}>
      <Image src={cover} alt="" fill sizes={sizes} quality={QUALITY} preload={preload} />
    </div>
  ) : (
    <div className={cls}>
      <span className="plate-title">{title}</span>
      {size === "large" && <span className="plate-author">Paul Gonave Tirogène</span>}
    </div>
  );
}
