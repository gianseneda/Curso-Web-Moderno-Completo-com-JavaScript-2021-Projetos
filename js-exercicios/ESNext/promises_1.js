function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase);
    }, segundos * 1000); //ele espera em milisegundos
  }); //funcao que receve 2 parametros e retorna uma promessa (há um delay pra simular um tempo de processamento), caso de sucesso é acessar o RESOLVE
}

falarDepoisDe(3, "Que Legal!")
  .then((frase) => frase.concat("?!?")) //o que foi passado de parametro, eu posso encadear com thens que recembem os mesmos parametros
  .then((outraFrase) => console.log(outraFrase))
  .catch((e) => console.log(e)); //catch é o caso de erro
