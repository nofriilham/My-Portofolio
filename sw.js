const CACHE = "porto-v7";

const BEKAL = [
  "/",
  "/index.html",
  "/profil.html",
  "/kontak.html",
  "/offline.html",
  "/css/style.css",
  "/js/main.js",
  "/js/tema.js",
  "/js/validasi.js",
  "/js/galeri.js",
  "/data.json",
  "/manifest.json",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/gambar/profil.webp",
  "/gambar/air-terjun-ambunsuri.jpeg",
  "/gambar/air-terjun-lubuk-hitam.jpeg",
  "/gambar/hutan-maliboanai.jpeg",
  "/gambar/pantai-gondoriah.jpeg",
  "/gambar/pulau-pisang.jpeg",
  "/gambar/sunset-pantaiairmanis.jpeg",
  "/gambar/sunset-unand.jpeg",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BEKAL)));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((nama) =>
        Promise.all(
          nama.filter((n) => n !== CACHE).map((n) => caches.delete(n)),
        ),
      ),
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((hit) => hit || fetch(e.request))
      .catch(() => {
        if (e.request.mode === "navigate") {
          return caches.match("/offline.html");
        }
      }),
  );
});
