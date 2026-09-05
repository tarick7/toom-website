import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// TODO(intégration) : brancher cet endpoint sur le CRM / Hermes Agent au lieu
// d'un simple fichier JSON local. Le payload est déjà structuré pour ça.
const STORE_PATH = path.join(process.cwd(), "data", "devis-leads.json");

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  if (formData.get("company_website")) {
    // Honeypot rempli : on répond OK sans rien faire, sans alerter le bot.
    return NextResponse.json({ ok: true });
  }

  const requiredFields = ["event_date", "guest_count", "event_type", "name", "email", "consent"];
  for (const field of requiredFields) {
    if (!formData.get(field)) {
      return NextResponse.json(
        { ok: false, error: `Champ requis manquant : ${field}` },
        { status: 400 },
      );
    }
  }

  const lead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    eventDate: formData.get("event_date"),
    guestCount: formData.get("guest_count"),
    eventType: formData.get("event_type"),
    format: formData.get("format") || null,
    location: formData.get("location") || null,
    logistics: formData.get("logistics") || null,
    equipment: formData.getAll("equipment"),
    budget: formData.get("budget") || null,
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || null,
    message: formData.get("message") || null,
    consent: true,
  };

  try {
    let existing: unknown[] = [];
    try {
      const raw = await fs.readFile(STORE_PATH, "utf-8");
      existing = JSON.parse(raw);
    } catch {
      existing = [];
    }
    existing.push(lead);
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(existing, null, 2), "utf-8");
  } catch (error) {
    console.error("Failed to persist devis lead", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
