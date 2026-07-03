import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

const imageMap: Record<string, string> = {
  "cablage-detail.jpg": "pexels-brett-sayles-4497197.jpg",
  "cablage-baie.jpg": "pexels-brett-sayles-5242294.jpg",
  "poste-bw.jpg": "pexels-moayach-439803.jpg",
  "poste-blue.jpg": "pexels-pramodtiwari-13989043.jpg",
  "poste-design.jpg": "pexels-tranmautritam-326508.jpg",
  "salle-equipee.jpg": "stux-computer-workstation-415138.jpg",
  "setup-premium.jpg": "pexels-mintworkspace-18304033.jpg",
  "setup-purple.jpg": "pexels-sharad-7199145.jpg",
  "double-screen-blue.jpg": "pexels-xexusdesigner-777001.jpg",
  "desk-clean.jpg": "pexels-sannnisahil-2585916.jpg",
  "hardware-close.jpg": "pexels-isabella-mendes-107313-13071305.jpg",
  "screen-support.jpg": "pexels-joshsorenson-1714203.jpg",
  "monitor-wide.jpg": "pexels-pramodtiwari-17840843.jpg",
  "pc-led.jpg": "pexels-sknafiz-28907898.jpg",
  "desk-ultrawide.jpg": "pexels-pramodtiwari-16767779.jpg",
} as const;

export async function GET(
  _: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const sourceName = imageMap[name];

  if (!sourceName) {
    notFound();
  }

  const sourcePath = path.join(
    process.cwd(),
    "..",
    "Gensis final",
    "images info",
    sourceName
  );

  const image = await readFile(sourcePath);

  return new Response(image, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
