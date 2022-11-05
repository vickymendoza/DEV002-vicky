const cipher = {
  //VARIABLE CON LAS LETRAS VALIDAS
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
    console.log(textoViejo);

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
          (indiceLetraVieja - letrasAAvanzar) % largoLetrasValidas;

        console.log(
          i +
            "-" +
            letraVieja +
            " - ESTE " +
            indiceLetraVieja +
            " - MENOS " +
            letrasAAvanzar +
            " - " +
            indiceLetraNueva
        );

        letraNueva = this.letrasValidas[indiceLetraNueva];
        textoNuevo = textoNuevo + letraNueva;
      }
    }
    return textoNuevo;
  },
};
export default cipher;
