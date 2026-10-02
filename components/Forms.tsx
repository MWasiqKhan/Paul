"use client";

import { useState } from "react";

// Front-end only, as in the original design — no backend is wired up yet.

export function NewsletterForm() {
  const [note, setNote] = useState("");
  return (
    <>
      <form
        className="line-form newsletter-form"
        onSubmit={(e) => {
          e.preventDefault();
          setNote("Merci pour votre inscription !");
          e.currentTarget.reset();
        }}
      >
        <input type="email" name="email" placeholder="Votre adresse email" required aria-label="Adresse email" />
        <button type="submit" className="btn btn--gold">S&apos;inscrire</button>
      </form>
      <p className="form-note form-note--light" role="status">{note}</p>
    </>
  );
}

export function ContactForm() {
  const [note, setNote] = useState("");
  return (
    <form
      className="line-form contact-form"
      data-reveal
      onSubmit={(e) => {
        e.preventDefault();
        setNote("Merci pour votre message. Nous vous répondrons rapidement.");
        e.currentTarget.reset();
      }}
    >
      <div className="form-row">
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" name="nom" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-row">
        <label htmlFor="sujet">Sujet</label>
        <input type="text" id="sujet" name="sujet" required />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>
      </div>
      <button type="submit" className="btn btn--fill">Envoyer</button>
      <p className="form-note" role="status">{note}</p>
    </form>
  );
}
