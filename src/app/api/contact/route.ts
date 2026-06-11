import { Resend } from "resend";

import { siteConfig } from "@/lib/site";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { message: "La solicitud no tiene un formato válido." },
      { status: 400 }
    );
  }

  const name = getString(payload.name);
  const email = getString(payload.email);
  const company = getString(payload.company);
  const message = getString(payload.message);

  if (!name || !email || !message) {
    return Response.json(
      { message: "Nombre, correo y mensaje son obligatorios." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { message: "El correo no tiene un formato válido." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { message: "Falta configurar RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const lead = [
    ["Nombre", name],
    ["Email", email],
    ["Empresa o despacho", company || "No especificado"],
    ["Mensaje", message],
  ];

  const text = lead.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html = `
    <div style="font-family: Arial, sans-serif; color: #1f1b1a; line-height: 1.55;">
      <h1 style="font-size: 20px; margin: 0 0 18px;">Nuevo lead desde Gralith</h1>
      ${lead
        .map(
          ([label, value]) => `
            <p style="margin: 0 0 14px;">
              <strong>${escapeHtml(label)}:</strong><br />
              ${escapeHtml(value).replace(/\n/g, "<br />")}
            </p>
          `
        )
        .join("")}
    </div>
  `;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Gralith <leads@gralith.com.mx>",
      to: siteConfig.email,
      replyTo: email,
      subject: "Nuevo lead desde Gralith",
      text,
      html,
    });

    if (error) {
      return Response.json(
        { message: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
        { status: 502 }
      );
    }
  } catch {
    return Response.json(
      { message: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 502 }
    );
  }

  return Response.json({ message: "Mensaje enviado correctamente." });
}
