console.log(typeof Object) //função
console.log(typeof new Object) //objeto

const Client = function(){

}

console.log(typeof Client)
console.log(typeof new Client)

class Produto {} //ES 2015
console.log(typeof Produto)
console.log(typeof new Produto ()) //tanto faz com os () ou não