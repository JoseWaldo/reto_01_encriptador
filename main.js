/*
Reglas de Encriptación:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
aeiou
aienterimes
*/

const $d = document;

const inputText = $d.querySelector("#inputText");
const btnEncriptar = $d.querySelector("#btnEncriptar");
const btnDesencriptar = $d.querySelector("#btnDesencriptar");
const outputResult = $d.querySelector("#outputResult");
const btnCopyText = $d.querySelector("#copyText");
const warningMsg = $d.querySelector("#warningMsg");

const REGLAS_DE_ENCRIPTACION = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const REGLAS_DE_DESENCRIPTACION = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};

const replaceKeytoWord = (posIni, posFin, subcadena, cadena) => {
  let cadenaIzq;
  let cadenaDer;
  let reemplazo;
  cadenaIzq = cadena.slice(0, posIni);
  cadenaDer = cadena.slice(posFin);
  reemplazo = REGLAS_DE_DESENCRIPTACION[subcadena];
  cadena = cadenaIzq + reemplazo + cadenaDer;

  return cadena;
};

const encrypt = (e) => {
  e.preventDefault();
  let cadena = inputText.value;

  if (cadena.length === 0) {
    const tempWarningMsg = warningMsg.textContent;
    warningMsg.textContent = "Es necesario un texto para encriptar.";
    setInterval(() => {
      warningMsg.textContent = tempWarningMsg;
    }, 10000);
  }

  let longitud = cadena.length;
  let i = 0;

  while (i <= longitud) {
    let char = cadena[i];

    if ("aeiou".indexOf(char) === -1) {
      i += 1;
      continue;
    }

    let subCadDer = cadena.substring(i + 1);
    let subCadIzq = cadena.substring(0, i);

    const palabraReemplazo = REGLAS_DE_ENCRIPTACION[char];
    char = palabraReemplazo;
    i += palabraReemplazo.length;
    cadena = subCadIzq + char + subCadDer;
    longitud = cadena.length;
  }

  outputResult.value = cadena;
};

const copyOutput = (e) => {
  e.preventDefault();
  outputResult.select();
  outputResult.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(outputResult.value);
};

const decrypt = (e) => {
  e.preventDefault();
  let cadena = inputText.value;

  if (cadena.length === 0) {
    const tempWarningMsg = warningMsg.textContent;
    warningMsg.textContent = "Es necesario un texto para desencriptar.";
    setInterval(() => {
      warningMsg.textContent = tempWarningMsg;
    }, 10000);
  }

  let longitud = cadena.length;
  let i = 0;

  const keysReglasDesencritacion = Object.keys(REGLAS_DE_DESENCRIPTACION);

  while (i <= longitud) {
    let subcadena2 = cadena.slice(i, i + 2);
    let subcadena4 = cadena.slice(i, i + 4);
    let subcadena5 = cadena.slice(i, i + 5);

    if (keysReglasDesencritacion.includes(subcadena2)) {
      cadena = replaceKeytoWord(i, i + 2, subcadena2, cadena);
    } else if (keysReglasDesencritacion.includes(subcadena4)) {
      cadena = replaceKeytoWord(i, i + 4, subcadena4, cadena);
    } else if (keysReglasDesencritacion.includes(subcadena5)) {
      cadena = replaceKeytoWord(i, i + 5, subcadena5, cadena);
    }

    i += 1;
  }

  outputResult.value = cadena;
};

btnEncriptar.addEventListener("click", (e) => encrypt(e));
btnCopyText.addEventListener("click", (e) => copyOutput(e));
btnDesencriptar.addEventListener("click", (e) => decrypt(e));
