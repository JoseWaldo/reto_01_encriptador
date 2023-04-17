const REGLAS_DE_ENCRIPTACION = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

const encriptar = () => {
  let text = "aeiou";
  let longitud = text.length;
  for (let i = 0; i <= longitud; i++) {
    const char = text[i];
    if ("aeiou".indexOf(char) === -1) {
      continue;
    }
    const palabraReemplazo = REGLAS_DE_ENCRIPTACION[char];
    text = text.replace(char, palabraReemplazo);
    i += palabraReemplazo.length - 1;
    longitud = text.length;
  }
  return text;
};

console.log(encriptar());
