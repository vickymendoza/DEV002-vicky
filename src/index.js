import cipher from "./cipher.js";

function encriptar() {
  let textoNuevo = cipher.encode(
    document.getElementById("casillas").value,
    document.getElementById("entrada").value
  );
  document.getElementById("resultado").innerHTML =
    "tu nueva contraseña segura es: " + textoNuevo;
}
document.getElementById("btnencriptar").addEventListener("click", encriptar);

function desencriptar() {
  let textoNuevo = cipher.decode(
    document.getElementById("casillas").value,
    document.getElementById("entrada").value
  );
  document.getElementById("resultado").innerHTML =
    "tu palabra secreta era: " + textoNuevo;
}
document
  .getElementById("btndesencriptar")
  .addEventListener("click", desencriptar);
