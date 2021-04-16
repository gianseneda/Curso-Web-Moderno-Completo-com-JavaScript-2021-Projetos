const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react); //retorna undefined
console.log(tecnologias.get("react").framework);

const chavesVariadas = new Map([
  [function () {}, "Funcao"],
  [{}, "Objeto"],
  [123, "Numero"],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); //objeto está contido?
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);
