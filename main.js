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
const inputResult = $d.querySelector("#inputResult");

const REGLAS_DE_ENCRIPTACION = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encriptar = (e) => {
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
  inputResult.value = text;
};

btnEncriptar.addEventListener("click", (e) => encriptar(e));
