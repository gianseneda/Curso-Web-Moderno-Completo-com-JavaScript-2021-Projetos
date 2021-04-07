// o ponto (.) acessa funções e métodos de um objeto

console.log(Math.ceil(6.1)) //arredonda pra cima

const obj1 ={}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //diferente de qualquer variável, o THIS me permite criar um atributo público, já que as variáveis ficariam dentro do escopo da função.
    this.exec = function (){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


