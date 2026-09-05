"use client";

import { useState } from "react";
import { eventTypes } from "@/lib/event-types";

const formats = [
  "Buffet froid",
  "Cocktail dînatoire",
  "Plateau-repas",
  "Mezze party",
];

const logistics = [
  "Livraison seule",
  "Livraison + mise en place",
  "Service complet",
];

export function DevisForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    // Honeypot anti-spam : champ invisible, doit rester vide.
    if (formData.get("company_website")) {
      setStatus("done");
      return;
    }
    try {
      const res = await fetch("/api/devis", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded-2xl border border-border bg-surface p-8 text-center text-lg">
        Merci ! Votre demande a bien été envoyée, nous revenons vers vous
        rapidement.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Date de l'événement" required>
          <input required type="date" name="event_date" className="input" />
        </Field>
        <Field label="Nombre de convives" required>
          <input
            required
            type="number"
            min={1}
            name="guest_count"
            className="input"
          />
        </Field>
      </div>

      <Field label="Type d'événement" required>
        <select required name="event_type" className="input">
          <option value="">Sélectionnez…</option>
          {eventTypes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Format souhaité">
        <select name="format" className="input">
          <option value="">Sélectionnez…</option>
          {formats.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Lieu de l'événement">
        <input type="text" name="location" className="input" />
      </Field>

      <Field label="Besoin logistique">
        <select name="logistics" className="input">
          <option value="">Sélectionnez…</option>
          {logistics.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Matériel nécessaire">
        <div className="flex flex-wrap gap-4 text-sm">
          {["Vaisselle", "Nappage", "Mobilier"].map((m) => (
            <label key={m} className="flex items-center gap-2">
              <input type="checkbox" name="equipment" value={m} />
              {m}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Budget indicatif">
        <select name="budget" className="input">
          <option value="">Sélectionnez…</option>
          <option value="<1000">Moins de 1 000 €</option>
          <option value="1000-3000">1 000 – 3 000 €</option>
          <option value="3000-8000">3 000 – 8 000 €</option>
          <option value=">8000">Plus de 8 000 €</option>
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Nom" required>
          <input required type="text" name="name" className="input" />
        </Field>
        <Field label="Email" required>
          <input required type="email" name="email" className="input" />
        </Field>
      </div>
      <Field label="Téléphone">
        <input type="tel" name="phone" className="input" />
      </Field>

      <Field label="Votre message">
        <textarea name="message" rows={4} className="input" />
      </Field>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input required type="checkbox" name="consent" className="mt-1" />
        <span>
          J&rsquo;accepte que mes données soient utilisées par TOOM pour
          traiter ma demande de devis, conformément à la{" "}
          <a href="/mentions-legales" className="underline">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-foreground px-8 py-3 font-medium text-background transition-colors hover:bg-accent-dark disabled:opacity-50"
      >
        {status === "loading" ? "Envoi…" : "Envoyer ma demande"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Une erreur est survenue, merci de réessayer ou de nous contacter
          directement.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      {required && <span className="text-accent-dark"> *</span>}
      <div className="mt-2 font-normal">{children}</div>
    </label>
  );
}
