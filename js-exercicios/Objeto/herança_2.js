// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "Z"; //evite fazer isso

const avo = { attr1: "A" }; //Pai desse é o Object.prototype
const pai = { __proto__: avo, attr2: "B", attr3: "3" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr1); //A
console.log(filho.attr0); //Z
console.log(filho.attrA); //undefine
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: "F40",
  velMax: 324, //shadowing, sobrescreve o velMax do objeto pai
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`; //referencia o prototipo, outro tipo de shadowing
  },
};

Object.setPrototypeOf(ferrari, carro); //estabelecendo relacao entre ferrari e carro
Object.setPrototypeOf(volvo, carro); //estabelecendo relacao entre ferrari e carro

console.log(ferrari); //aparece apenas atributos que pertencem ao objeto
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());

console.log(ferrari.__proto__);
