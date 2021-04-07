// recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //tire de dentro do objeto PESSOA nome e idade
console.log(nome, idade)

const{ nome: n, idade: i } = pessoa //tire esses atributos e coloque nestas variáveis

console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa //bemHumorada, se nao atribuir nada, virar TRUE

console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//const { conta: { ag, num } } = pessoa
//console.log(ag, num) //neste caso haverá problema pois não existe esse atributo conta

console.log('---------------')

const [a] = [10]
console.log(a)

const [n1, ,n3, , n5, n6 = 0 ] =[10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [ , [ , nota]] = [[, 8,8], [9,6,8]]

console.log(nota)

console.log('---------------')

function rand({min =0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)//arredonda pra baixo
}
const obj = { max:50, min:40}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))
//console.log(rand())//aqui retorna erro pois não está esperando uma função sem parametro de objeto

console.log('---------------')

function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random()* (max-min)+min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([,10]))
console.log(rand([]))
//console.log(rand())//problema, retorna erro