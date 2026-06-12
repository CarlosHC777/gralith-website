import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Gralith - Automatización de procesos";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const mark = await readFile(
    join(process.cwd(), "public/brand/gralith-mark.png")
  );
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbfaf7",
          color: "#241b1a",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          border: "1px solid #ded8d2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          <img
            src={markSrc}
            alt=""
            width="56"
            height="56"
            style={{ width: "56px", height: "56px", objectFit: "contain" }}
          />
          Gralith
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              width: "150px",
              height: "6px",
              background: "#641f27",
              borderRadius: "999px",
            }}
          />
          <h1
            style={{
              margin: 0,
              maxWidth: "900px",
              fontSize: "76px",
              lineHeight: 0.98,
              letterSpacing: "0",
              fontWeight: 700,
            }}
          >
            Automatización de procesos para equipos profesionales
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "28px",
            color: "#6b605c",
          }}
        >
          <span>Centralización, trazabilidad y visibilidad operativa</span>
          <span>gralith.com.mx</span>
        </div>
      </div>
    ),
    size
  );
}
