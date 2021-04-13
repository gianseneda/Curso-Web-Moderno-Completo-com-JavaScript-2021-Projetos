const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" }; //mostrando que o Array em JS é um tipo de Objeto
console.log(quaseArray);
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  }, //this - objeto atual
  enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Rafael", "Ana", "Bia"];
console.log(quaseArray.toString(), meuArray);
