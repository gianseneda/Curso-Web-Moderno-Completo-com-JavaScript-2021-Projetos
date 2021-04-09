// function declaration

function soma(x, y) {
  return x + y;
} //desta forma, podemos chamar a função antes de declará-la (hoist) - js carrega funcoes deste tipo primeiro, isso não acontece na function expression

// function expression

const sub = function (x, y) {
  return x - y;
};

// named function expression

const mult = function mult(x, y) {
  return x * y;
}; //unica vantagem é melhor localização
