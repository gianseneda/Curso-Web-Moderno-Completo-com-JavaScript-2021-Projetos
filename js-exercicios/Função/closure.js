// Closure: é o escopo criada quando uma definição é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação
const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());

//retorna LOCAL, pois estou chamando a função dentro que está no mesmo escopo que a const LOCAL
