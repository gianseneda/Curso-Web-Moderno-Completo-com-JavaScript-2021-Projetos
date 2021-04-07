// par nome/valor
const saudacao = 'Opa'; //contexto léxico 1 - local fisico onde sua variável foi definida

function exec(){
    const saudacao = 'faalaa' //contexto léxico 2
    return saudacao
}
//Objetos são grupos alinhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua Muito Legal",
        número: 123
    }
}
console.log(saudacao)
console.log(exec()) //retorna a variavel do escopo dessa funcão saudacao
console.log(Cliente)
