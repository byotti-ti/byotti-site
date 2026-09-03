import sharp from "sharp";

// Recorta o rosto (círculo central) das artes de depoimento 1080x1080
// e gera avatares 320x320 para usar nos cards.
const jobs = [
  { src: "public/depoimentos/DEPOIMENTO 01.png", out: "public/depoimentos/bruna-zart.png", cx: 540, cy: 337, r: 150 },
  { src: "public/depoimentos/DEPOIMENTO 02.png", out: "public/depoimentos/norberto-ginar.png", cx: 540, cy: 345, r: 150 },
  { src: "public/depoimentos/DEPOIMENTO 03.png", out: "public/depoimentos/everton-weissheimer.png", cx: 540, cy: 350, r: 150 },
];

for (const j of jobs) {
  const size = j.r * 2;
  await sharp(j.src)
    .extract({ left: j.cx - j.r, top: j.cy - j.r, width: size, height: size })
    .resize(320, 320)
    .png()
    .toFile(j.out);
  console.log("gerado", j.out);
}
