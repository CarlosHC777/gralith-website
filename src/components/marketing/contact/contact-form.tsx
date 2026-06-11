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
      className="rounded-lg border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-medium">
          Nombre
          <Input name="name" placeholder="Tu nombre" required />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Correo
          <Input
            name="email"
            type="email"
            placeholder="nombre@empresa.com"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Empresa o despacho
          <Input name="company" placeholder="Nombre de la organización" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          ¿Qué quieres automatizar?
          <Textarea
            name="message"
            placeholder="Describe el proceso, herramientas actuales y principal dolor operativo."
            className="min-h-36"
            required
          />
        </label>
        <Button
          type="submit"
          size="lg"
          className="h-11 rounded-md"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Enviando..." : "Enviar solicitud"}
        </Button>
        {feedback ? (
          <p
            className={
              state === "success"
                ? "text-sm text-primary"
                : "text-sm text-destructive"
            }
          >
            {feedback}
          </p>
        ) : null}
      </div>
    </form>
  );
}
