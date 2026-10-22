export function periksaNama(nilai) {
  if (nilai === "") return "Nama wajib diisi.";
  if (nilai.length < 3) return "Nama minimal 3 huruf.";
  return "";
}

export function periksaEmail(nilai) {
  // Pola umum pemeriksa email (sumber: MDN, Regular expressions)
  const polaEmail = /^\S+@\S+\.\S+$/;
  if (nilai === "") return "Email wajib Diisi.";
  if (!polaEmail.test(nilai))
    return "Format email salah, contoh: TulisTangan@gmail.com";
  return "";
}

export function periksaTopik(nilai) {
  if (nilai === "") return "Topik harus dipilih.";
  return "";
}

export function periksaPesan(nilai) {
  if (nilai === "") return "Pesan wajib diisi.";
  if (nilai.length < 10) return "Pesan minimal 10 karakter.";
  return "";
}
function tampilkanError(input, kotak, pesan) {
  kotak.textContent = pesan;
  input.classList.toggle("invalid", pesan !== "");
}

export function aktifkanValidasi() {
  const form = document.querySelector("form");
  if (!form) return;

  const iNama = document.querySelector("#nama");
  const iEmail = document.querySelector("#email");
  const iTopik = document.querySelector("#topik");
  const iPesan = document.querySelector("#pesan");

  const gNama = document.querySelector("#error-nama");
  const gEmail = document.querySelector("#error-email");
  const gTopik = document.querySelector("#error-topik");
  const gPesan = document.querySelector("#error-pesan");
  const status = document.querySelector("#status-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";

    const eNama = periksaNama(iNama.value.trim());
    const eEmail = periksaEmail(iEmail.value.trim());
    const eTopik = periksaTopik(iTopik.value.trim());
    const ePesan = periksaPesan(iPesan.value.trim());

    tampilkanError(iNama, gNama, eNama);
    tampilkanError(iEmail, gEmail, eEmail);
    tampilkanError(iTopik, gTopik, eTopik);
    tampilkanError(iPesan, gPesan, ePesan);

    if (eNama) {
      iNama.focus();
      return;
    }
    if (eEmail) {
      iEmail.focus();
      return;
    }
    if (eTopik) {
      iTopik.focus();
      return;
    }
    if (ePesan) {
      iPesan.focus();
      return;
    }

    status.textContent = "Pesan berhasil dikirim. Terima kasih!";
    form.reset();
  });
}
