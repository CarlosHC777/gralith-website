import { ImageResponse } from "next/og";

export const alt = "Gralith - Automatización de procesos";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#641f27",
              color: "#fbfaf7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            G
          </div>
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
