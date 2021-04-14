const anonimo = process.argv.indexOf("-a") !== -1; //flag de chamada no terminal
console.log(anonimo);

if (anonimo) {
  process.stdout.write("Fala Anonima!\n");
  process.exit();
} else {
  process.stdout.write("Informe o seu nome: "); //saída de uma informacao
  process.stdin.on("data", (data) => {
    //entrada de informacao
    const nome = data.toString().replace("\n", "");

    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit();
  });
}
