import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

// This endpoint handles marketing lead capture only.
// It must never collect or store clinical/PHI data (symptoms beyond a general
// "reason for visit" string, diagnoses, treatment history, insurance IDs, etc.).
// If the form is ever extended, keep that boundary intact.

type BookingPayload = {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  patientStatus: string;
  reason: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validate(body: Partial<BookingPayload>): string | null {
  if (!isNonEmptyString(body.name)) return "Name is required.";
  if (!isNonEmptyString(body.phone)) return "Phone number is required.";
  if (!isNonEmptyString(body.email) || !isValidEmail(body.email)) {
    return "A valid email address is required.";
  }
  if (!isNonEmptyString(body.preferredDate)) return "Preferred date is required.";
  if (!isNonEmptyString(body.preferredTime)) return "Preferred time is required.";
  if (!isNonEmptyString(body.patientStatus)) return "Patient status is required.";
  if (!isNonEmptyString(body.reason)) return "Reason for visit is required.";
  return null;
}

export async function POST(request: Request) {
  let body: Partial<BookingPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validationError = validate(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const lead: BookingPayload = {
    name: body.name!.trim(),
    phone: body.phone!.trim(),
    email: body.email!.trim(),
    preferredDate: body.preferredDate!.trim(),
    preferredTime: body.preferredTime!.trim(),
    patientStatus: body.patientStatus!.trim(),
    reason: body.reason!.trim(),
  };

  const destination = siteConfig.booking.leadDestination;

  if (!destination) {
    // No destination configured yet (local dev without BOOKING_LEAD_DESTINATION set).
    // TODO: once BOOKING_LEAD_DESTINATION is set in the environment, this branch
    // will stop firing and leads will forward for real.
    console.info("[book-appointment] BOOKING_LEAD_DESTINATION not set; lead not forwarded.");
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const forwardResponse = await fetch(destination, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: siteConfig.siteUrl, ...lead }),
    });

    if (!forwardResponse.ok) {
      throw new Error(`Lead destination responded with ${forwardResponse.status}`);
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[book-appointment] Failed to forward lead:", err);
    return NextResponse.json(
      { error: "We couldn't submit your request automatically. Please call our office." },
      { status: 502 },
    );
  }
}
