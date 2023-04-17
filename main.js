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

const REGLAS_DE_ENCRIPTACION = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encrypt = (e) => {
  e.preventDefault();
  let text = inputText.value;
  let longitud = text.length;

  for (let i = 0; i < longitud; i++) {
    const char = text[i];
    if ("aeiou".indexOf(char) === -1) {
      continue;
    }
    const palabraReemplazo = REGLAS_DE_ENCRIPTACION[char];
    text = text.replace(char, palabraReemplazo);
    i += palabraReemplazo.length - 1;
    longitud = text.length;
  }
  outputResult.value = text;
};

const copyOutput = (e) => {
  e.preventDefault();
  outputResult.select();
  outputResult.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(outputResult.value);
};

btnEncriptar.addEventListener("click", (e) => encrypt(e));
btnCopyText.addEventListener("click", (e) => copyOutput(e));
