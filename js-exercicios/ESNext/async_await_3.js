// gerar números da MegaSena

function gerarNumeroEntre(min, max, numerosProibidos) {
  if (min > max) {
    [max, min] = [min, max]; //destructuring
  }

  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número é repetido");
    } else {
      resolve(aleatorio);
    }
  });
}

async function gerarMegaSena(qtdDeNumeros, tentativas = 1) {
  try {
    const numeros = [];
    for (let _ of Array(qtdDeNumeros).fill()) {
      //criando um ARRAY com o tamanho esperado e fazendo o for
      numeros.push(await gerarNumeroEntre(1, 60, numeros));
    }
    return numeros;
  } catch (e) {
    if (tentativas > 10) {
      throw "Não deu certo";
    } else {
      return gerarMegaSena(qtdDeNumeros, tentativas + 1);
    }
  }
}

gerarMegaSena(8).then(console.log).catch(console.log);
