export function aktifkanTema() {
  const tombol = document.querySelector("#tombol-tema");
  if (!tombol) return;

  tombol.addEventListener("click", () => {
    const gelap = document.body.classList.toggle("gelap");
    tombol.textContent = gelap ? "Ganti tema" : "Ganti tema";
    tombol.setAttribute("aria-pressed", gelap);
  });
}
