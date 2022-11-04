//import cipher from 'cipher.js';

//REMPLAZO DE LETRAS, Creé el arreglo a recorrer
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

function encriptar() {
  // console.log(cipher);

  //creé una variable para capturar el valor de que se digite y para el texto que espero me restorne luego de recorrer la función
  let textoViejo = "";
  let textoNuevo = "";

  //Aquí le asignamos el valor digitado
  textoViejo = document.getElementById("entrada").value;

  //me imprime en consola el valor que nos digitaron
  //console.log(textoViejo);

  let largoLetrasValidas = letrasValidas.length;
  let letrasAAvanzar = document.getElementById("casillas").value;
  letrasAAvanzar =
    ((letrasAAvanzar % largoLetrasValidas) + largoLetrasValidas) %
    largoLetrasValidas;
  //console.log(letrasAAvanzar);
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
    console.log(indiceLetraVieja);

    if (indiceLetraVieja == -1) {
      textoNuevo = textoNuevo + letraVieja;
    } else {
      //Ejecutar la fórmula (encontrar el indice de la nueva letra)
      indiceLetraNueva =
        (indiceLetraVieja + letrasAAvanzar) % largoLetrasValidas;

      //METER EN LETRA NUEVA EL VALOR QUE ENCONTREMOS EN LA POSICION DE indiceLetraNueva
      letraNueva = letrasValidas[indiceLetraNueva];
      textoNuevo = textoNuevo + letraNueva;
      //console.log(indiceLetraNueva + "-" + letraNueva);
    }
  }

  //FIN REMPLAZO DE LETRAS

  //me muestra lo que el usuario digitó en un espacio diferente al que recibimos
  document.getElementById("resultado").innerHTML =
    "tu nueva contraseña segura es: " + textoNuevo;
}

function desencriptar() {
  // console.log(cipher);

  //creé una variable para capturar el valor de que se digite y para el texto que espero me restorne luego de recorrer la función
  let textoViejo = "";
  let textoNuevo = "";

  //Aquí le asignamos el valor digitado
  textoViejo = document.getElementById("entrada").value;

  let largoLetrasValidas = letrasValidas.length;
  let letrasAAvanzar = document.getElementById("casillas").value;
  letrasAAvanzar =
    ((letrasAAvanzar % largoLetrasValidas) + largoLetrasValidas) %
    largoLetrasValidas;
  let indiceLetraVieja = 0;
  let indiceLetraNueva = 0;
  let letraNueva;
  let letraVieja;
  const letrasViejas = Array.from(textoViejo);

  //Vamos a recorrer la palabra vieja en busca de cifrar la palabra que ingresa
  for (let i = 0; i < letrasViejas.length; i++) {
    letraVieja = letrasViejas[i];

    //Buscar la posición de la letra en el abecedario de Mayúsculas
    indiceLetraVieja = letrasValidas.indexOf(letraVieja);
    if (indiceLetraVieja == -1) {
      textoNuevo = textoNuevo + letraVieja;
    } else {
      //Ejecutar la fórmula (encontrar el indice de la nueva letra)
      indiceLetraNueva =
        (indiceLetraVieja - letrasAAvanzar) % largoLetrasValidas;

      //METER EN LETRA NUEVA EL VALOR QUE ENCONTREMOS EN LA POSICION DE indiceLetraNueva
      letraNueva = letrasValidas[indiceLetraNueva];
      textoNuevo = textoNuevo + letraNueva;
    }
  }
  //FIN REMPLAZO DE LETRAS

  //me muestra lo que el usuario digitó en un espacio diferente al que recibimos
  document.getElementById("resultado").innerHTML =
    "tu palabra secreta era: " + textoNuevo;
}
