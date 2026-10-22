export async function muatGaleri() {
  const daftar = document.querySelector("#daftar-foto");
  const status = document.querySelector("#status-galeri");
  if (!daftar) return;

  status.textContent = "Memuat…";

  try {
    const res = await fetch("data.json");

    if (!res.ok) {
      throw new Error("Gagal: " + res.status);
    }
    const data = await res.json();

    for (const foto of data) {
      const kartu = document.createElement("article");
      const gambar = document.createElement("img");
      const judul = document.createElement("h3");
      const lokasi = document.createElement("p");

      gambar.src = foto.file;
      gambar.alt = foto.alt;
      judul.textContent = foto.judul;
      lokasi.textContent = foto.lokasi;

      kartu.appendChild(gambar);
      kartu.appendChild(judul);
      kartu.appendChild(lokasi);
      daftar.appendChild(kartu);
    }

    status.textContent = "";
  } catch (err) {
    console.error(err);
    status.textContent = "Gagal memuat galeri. Coba lagi nanti.";
  }
}
