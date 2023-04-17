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
  let i = 0;

  for (let i = 0; i < longitud; i++) {
    console.log(i);
    const char = text[i];
    if ("aeiou".indexOf(char) === -1) {
      continue;
    }
    console.log(char);
    const palabraReemplazo = REGLAS_DE_ENCRIPTACION[char];
    text = text.replace(char, palabraReemplazo);
    i += palabraReemplazo.length;
    longitud = text.length;
  }
  console.log(text);
};

btnEncriptar.addEventListener("click", (e) => encriptar(e));
