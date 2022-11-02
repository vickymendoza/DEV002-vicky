//import cipher from 'cipher.js';

function encriptar() {
  // console.log(cipher);

  //creé una variable para capturar el valor de que se digite
  let textoViejo = "";
  let textoNuevo = "";

  //Aquí le asignamos el valor digitado
  textoViejo = document.getElementById("entrada").value;

  //me imprime en consola el valor que nos digitaron
  //console.log(textoViejo);

  //REMPLAZO DE LETRAS
  const letrasValidas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let largoLetrasValidas = letrasValidas.length;
  let letrasAAvanzar = 33;
  let indiceLetraVieja = 0;
  let indiceLetraNueva = 0;
  let letraNueva;
  let letraVieja;
  const letrasViejas = Array.from(textoViejo);
  // console.log(letrasViejas);
  // console.log(largoLetrasValidas);

  //Vamos a recorrer la palabra vieja en busca de cifrar la palabra que ingresa
  for (let i = 0; i < letrasViejas.length; i++) {
    letraVieja = letrasViejas[i];

    //Buscar la posición de la letra en el abecedario de Mayúsculas
    indiceLetraVieja = letrasValidas.indexOf(letraVieja);

    //Ejecutar la fórmula (encontrar el indice de la nueva letra)
    indiceLetraNueva = (indiceLetraVieja + letrasAAvanzar) % largoLetrasValidas;

    //METER EN LETRA NUEVA EL VALOR QUE ENCONTREMOS EN LA POSICION DE indiceLetraNueva
    letraNueva = letrasValidas[indiceLetraNueva];
    textoNuevo = textoNuevo + letraNueva;
    console.log(indiceLetraNueva + "-" + letraNueva);
  }

  //FIN REMPLAZO DE LETRAS

  //me muestra lo que el usuario digitó en un espacio diferente al que recibimos
  document.getElementById("resultado").innerHTML =
    "tu nueva contraseña es: " + textoNuevo;
  //  console.log(document.getElementById("resultado").value);
}

///DESPUES
//function desencriptar() {
//// console.log(cipher);
//let textoIngresado = document.getElementById("myText").value;
//console.log(textoIngresado);
//}
