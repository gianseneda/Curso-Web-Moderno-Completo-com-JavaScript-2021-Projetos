const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();

//por conta do contexto Lexico, que é o contexto onde a função foi escrita, ela retornará a const GLOBAL, pois foi o mesmo contexto onde a função convocada foi definida.
