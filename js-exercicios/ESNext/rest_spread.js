// Operador ...rest (juntar)/ spread(juntar)
//usar rest com parâmetro de função

//usar spread como objeto
const funcionario = { nome: "Maria", salario: 12348.9 };
const clone = { ativo: true, ...funcionario }; //espalhando todos os atributos de funcionario neste objeto
console.log(clone);

//usar spread com array
const grupoA = ["Joao", "Pedro", "Maria"];
const grupoFinal = ["Maria", ...grupoA, "Rafaela"];
console.log(grupoFinal);
