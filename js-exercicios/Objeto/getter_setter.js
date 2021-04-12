const sequencia = {
  _valor: 1, //convencionando que _var é uma variável interna e não publica
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  },
};

console.log(sequencia.valor, sequencia.valor); //ele nao acessa o atributo, e sim as funcoes get set
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; //cai no if, ele ignora
console.log(sequencia.valor, sequencia.valor);
