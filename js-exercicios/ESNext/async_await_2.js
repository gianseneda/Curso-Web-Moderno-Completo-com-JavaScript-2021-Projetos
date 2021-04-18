// para o ASYNC/AWAIT sempre deve ter uma função PROMISE

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando promise");
      resolve();
    }, tempo);
  });
}

// await esperarPor(3000); //vai dar problema, precisa colocar dentro de uma função ASYNC

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  let valor = await retornarValor();

  await esperarPor(1500);
  console.log(`Async/Await ${valor}...`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}...`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}...`);
}

async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

executar();
