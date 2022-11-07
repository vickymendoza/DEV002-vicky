import cipher from "./cipher.js";

function encriptar() {
  //creé una variable textoNuevo para recibir la contraseña
  //consume el metodo cipher.encode y le paso
  //el valor de que digite mi usuario y la palabra que quiere encriptar
  //cipher.encode retorna el texto encriptado
  let textoNuevo = cipher.encode(
    document.getElementById("casillas").value,
    document.getElementById("entrada").value
  );

  //Accedemos al Label resultado
  //con el innerHTML podemos asignarle un valor o un texto a mostrar en el label,
  //el cual es la contraseña
  //concatenamos el resultado de la contraseña encriptada con un texto
  // para darle al usuario.
  document.getElementById("resultado").innerHTML =
    "tu nueva contraseña segura es: " + textoNuevo;
}

//Agrega un evento que escucha el click en este caso que vamos a encriptar
document.getElementById("btnencriptar").addEventListener("click", encriptar);

function desencriptar() {
  //creé una variable textoNuevo para recibir la contraseña que ya fué encriptada
  //consume el metodo cipher.decode y le paso
  //el valor de que digite mi usuario y la palabra que quiere desencriptar
  //cipher.decode retorna el texto desencriptado
  let textoNuevo = cipher.decode(
    document.getElementById("casillas").value,
    document.getElementById("entrada").value
  );
  //concatenamos el resultado de la contraseña desencriptada con un texto
  // para retornarle al usuario.
  document.getElementById("resultado").innerHTML =
    "tu palabra secreta era: " + textoNuevo;
}

//Agrega un evento que escucha el click en este caso que vamos a desencriptar
document
  .getElementById("btndesencriptar")
  .addEventListener("click", desencriptar);
