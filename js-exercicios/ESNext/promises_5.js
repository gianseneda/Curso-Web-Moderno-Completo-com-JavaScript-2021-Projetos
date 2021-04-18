function gerarNumeroEntre(min, max, tempo) {
  if (min > max) {
    [max, min] = [min, max]; //destructuring
  }

  return new Promise((resolve) => {
    setTimeout(function () {
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
      resolve(aleatorio);
    }, tempo);
  });
}

//gerar 10 numeros aleatórios de vez

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumeroEntre(1, 60, 4000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 3000),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 1500),
  ]);
}

gerarVariosNumeros().then((numeros) => console.log(numeros));
