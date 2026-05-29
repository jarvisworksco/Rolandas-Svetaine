import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";
import { siteData } from "@/lib/site-data";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 min
  const max = 5;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Per daug užklausų. Bandykite vėliau." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Neteisinga užklausa." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Neteisingi duomenys." }, { status: 422 });
  }

  const { vardas, email, telefonas, imone, paslauga, zinute, website } = parsed.data;

  // Honeypot check
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL || siteData.el_pastas;

  if (!resendKey) {
    console.warn("RESEND_API_KEY not set — logging form submission:");
    console.log({ vardas, email, telefonas, imone, paslauga, zinute });
    return NextResponse.json({ ok: true });
  }

  const html = `
    <h2>Nauja užklausa – ${siteData.verslo_pavadinimas}</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px">
      <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">Vardas</td><td style="padding:8px;border:1px solid #e5e7eb">${vardas}</td></tr>
      <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">El. paštas</td><td style="padding:8px;border:1px solid #e5e7eb"><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">Telefonas</td><td style="padding:8px;border:1px solid #e5e7eb"><a href="tel:${telefonas}">${telefonas}</a></td></tr>
      ${imone ? `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">Įmonė</td><td style="padding:8px;border:1px solid #e5e7eb">${imone}</td></tr>` : ""}
      ${paslauga ? `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">Paslauga</td><td style="padding:8px;border:1px solid #e5e7eb">${paslauga}</td></tr>` : ""}
      <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb">Žinutė</td><td style="padding:8px;border:1px solid #e5e7eb;white-space:pre-wrap">${zinute}</td></tr>
    </table>
  `;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);
    await resend.emails.send({
      from: `Svetainė <neatsakyti@${siteData.domenas}>`,
      to: [contactEmail],
      replyTo: email,
      subject: `Nauja užklausa – ${paslauga || "Bendras klausimas"} (${vardas})`,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Nepavyko išsiųsti žinutės." }, { status: 500 });
  }
}
