//import cipher from 'cipher.js';

function encriptar() {
  // console.log(cipher);

  //creé una variable para capturar el valor de que se digite
  let textoIngresado = "";

  //Aquí le asignamos el valor digitado
  textoIngresado = document.getElementById("entrada").value;

  //me imprime en consola el valor que nos digitaron
  console.log(textoIngresado);

  //me muestra lo que el usuario digitó en un espacio diferente al que recibimos
  document.getElementById("resultado").innerHTML =
    "tu nueva contraseña es: " + textoIngresado;
  console.log(document.getElementById("resultado").value);
}
function desencriptar() {
  // console.log(cipher);
  let textoIngresado = document.getElementById("myText").value;
  console.log(textoIngresado);
}
