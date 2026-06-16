"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "No se pudo enviar el mensaje.");
      }

      form.reset();
      setState("success");
      setFeedback("Gracias. Recibimos tu solicitud y te contactaremos pronto.");
    } catch (error) {
      setState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Inténtalo de nuevo."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-elevated)] p-5 text-[var(--gralith-dark-text)] shadow-[0_24px_90px_-70px_#000] sm:p-6 md:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium">
          Nombre
          <Input
            name="name"
            placeholder="Tu nombre"
            autoComplete="name"
            className="border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)] placeholder:text-[var(--gralith-dark-text-muted)]"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Correo
          <Input
            name="email"
            type="email"
            placeholder="nombre@empresa.com"
            autoComplete="email"
            className="border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)] placeholder:text-[var(--gralith-dark-text-muted)]"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Empresa o despacho
          <Input
            name="company"
            placeholder="Nombre de la organización"
            autoComplete="organization"
            className="border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)] placeholder:text-[var(--gralith-dark-text-muted)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          ¿Qué quieres automatizar?
          <Textarea
            name="message"
            placeholder="Describe el proceso, herramientas actuales y principal dolor operativo."
            className="min-h-36 border-[var(--gralith-dark-border)] bg-[var(--gralith-dark-base)] text-[var(--gralith-dark-text)] placeholder:text-[var(--gralith-dark-text-muted)]"
            required
          />
        </label>
        <Button
          type="submit"
          size="lg"
          className="h-11 rounded-md bg-[var(--gralith-garnet)] text-[var(--gralith-dark-text)] hover:bg-[var(--gralith-garnet-muted)]"
          disabled={state === "loading"}
          aria-busy={state === "loading"}
        >
          {state === "loading" ? "Enviando..." : "Enviar solicitud"}
        </Button>
        {feedback ? (
          <p
            role={state === "error" ? "alert" : "status"}
            aria-live="polite"
            className={
              state === "success"
                ? "text-sm text-[var(--gralith-garnet-muted)]"
                : "text-sm text-red-300"
            }
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
