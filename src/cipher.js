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
    if (typeof letrasAAvanzar != "number") {
      throw new TypeError("Desplazamiento", "cipher.js", 34);
    }

    if (typeof textoViejo != "string") {
      throw new TypeError("clave", "cipher.js", 37);
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
          (indiceLetraVieja + letrasAAvanzar) % largoLetrasValidas;
        letraNueva = this.letrasValidas[indiceLetraNueva];
        textoNuevo = textoNuevo + letraNueva;
      }
    }
    return textoNuevo;
  },

  decode(letrasAAvanzar, textoViejo) {
    if (typeof letrasAAvanzar != "number") {
      throw new TypeError("Desplazamiento", "cipher.js", 70);
    }

    if (typeof textoViejo != "string") {
      throw new TypeError("clave", "cipher.js", 74);
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
