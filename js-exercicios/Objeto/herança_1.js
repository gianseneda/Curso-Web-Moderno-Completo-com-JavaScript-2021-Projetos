const ferrari = {
  odelo: "F40",
  velMax: 324,
};

const volvo = {
  modelo: "V40",
  velMax: 200,
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__); //acessa o prototipo desse objeto, o objeto pai, no caso
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__); //não existe 'pai do pai', retorna null

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
