import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Genesis Service Informatique - installation, assistance et maintenance sur site";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, rgba(8,37,86,1) 0%, rgba(15,59,151,1) 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: "-1px" }}>
          Genesis Service Informatique
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05 }}>
            Installation, assistance et maintenance informatique sur site.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            Postes recents, support utilisateurs, maintenance de parc, cablage reseau,
            Wi-Fi et interventions de terrain pour petites structures et entreprises.
          </div>
        </div>
      </div>
    ),
    size
  );
}
