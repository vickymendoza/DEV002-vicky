const cipher = {
  //REMPLAZO DE LETRAS, Creé el arreglo a recorrer
  letrasValidas: [
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
    //"Ñ",
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
  ],

  encode(letrasAAvanzar, textoViejo) {
    // valido que el # de letras a avanzar sea de tipo número y sino arroja un error
    //"personaliza" un error
    if (isNaN(letrasAAvanzar)) {
      throw new TypeError("Desplazamiento", "cipher.js", 35);
    }

    // Valida que lo que le ingresa sea una cadena de texto
    if (typeof textoViejo != "string") {
      throw new TypeError("clave", "cipher.js", 40);
    }

    //se declaran variables para poder formalizar la fórmula
    //se declara la variable texto nuevo para retornar el método
    let textoNuevo = "";
    let indiceLetraVieja = 0;
    let indiceLetraNueva = 0;
    let letraNueva;
    let letraVieja;
    const letrasViejas = Array.from(textoViejo);
    //para almacenar el total de letras válidas y usarlas en la aplicación del método
    let largoLetrasValidas = this.letrasValidas.length;

    //* GARANTIZA QUE EL NUMERO DE LERAS A AVANZAR ESTE DENTRO DEL
    //LARGO DEL ARREGLODE LETRAS VALIDAS (26)
    letrasAAvanzar =
      ((letrasAAvanzar % largoLetrasValidas) + largoLetrasValidas) %
      largoLetrasValidas;

    //recorre la palabra ingresada para encontrar el indice en que se encuentra para encontrar las letras nuevas
    for (let i = 0; i < letrasViejas.length; i++) {
      //traer la letra que voy a encriptar
      letraVieja = letrasViejas[i];

      //ESTA EN EL ABECEDARIO DE MAYUSCULAS? "letrasValidas"
      //identificar donde está la letra con la que voy a reemplazar
      //Si la letra no es valida(no la encuentro en el abecedario me retornará -1)
      indiceLetraVieja = this.letrasValidas.indexOf(letraVieja);

      //verifica  que se cumplan los parámetros para poder aplicar la fórmula sino retornar el mismo valor ingresado
      if (indiceLetraVieja == -1) {
        //COMO NO ESTA EN EL ABECEDARIO RETORNO LA MISMA LETRA "letraVieja"
        textoNuevo = textoNuevo + letraVieja;
      } else {
        //APLICA LA FORMULA PA BUSCAR EL INDICE DE LA LETRA NUEVA
        indiceLetraNueva =
          (indiceLetraVieja + letrasAAvanzar) % largoLetrasValidas;

        letraNueva = this.letrasValidas[indiceLetraNueva];

        textoNuevo = textoNuevo + letraNueva;
      }
    }
    return textoNuevo;
  },

  decode(letrasAAvanzar, textoViejo) {
    if (isNaN(letrasAAvanzar)) {
      throw new TypeError("Desplazamiento", "cipher.js", 89);
    }

    if (typeof textoViejo != "string") {
      throw new TypeError("clave", "cipher.js", 93);
    }

    let textoNuevo = "";
    let largoLetrasValidas = this.letrasValidas.length;
    letrasAAvanzar =
      ((letrasAAvanzar % largoLetrasValidas) + largoLetrasValidas) %
      largoLetrasValidas;

    let indiceLetraVieja = 0;
    let indiceLetraNueva = 0;
    let letraNueva;
    let letraVieja;
    const letrasViejas = Array.from(textoViejo);

    for (let i = 0; i < letrasViejas.length; i++) {
      letraVieja = letrasViejas[i];

      indiceLetraVieja = this.letrasValidas.indexOf(letraVieja);

      if (indiceLetraVieja == -1) {
        textoNuevo = textoNuevo + letraVieja;
      } else {
        indiceLetraNueva =
          (indiceLetraVieja - letrasAAvanzar + largoLetrasValidas) %
          largoLetrasValidas;

        letraNueva = this.letrasValidas[indiceLetraNueva];
        textoNuevo = textoNuevo + letraNueva;
      }
    }
    return textoNuevo;
  },
};
export default cipher;
