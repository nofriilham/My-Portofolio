import { aktifkanTema } from "./tema.js";
import { aktifkanValidasi } from "./validasi.js";
import { muatGaleri } from "./galeri.js";
aktifkanTema();
aktifkanValidasi();
muatGaleri();
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}
