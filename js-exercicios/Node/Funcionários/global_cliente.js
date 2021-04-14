require("./global"); //por ser global nao precisa de variável

console.log(global.MinhaApp.saudacao());

global.MinhaApp.nome = "Eita"; //pelo freeze, aqui não vai mudar

console.log(global.MinhaApp.nome);
