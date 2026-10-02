"use client";

/** Current year, computed in the browser so the static build never goes stale. */
export default function Year() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
