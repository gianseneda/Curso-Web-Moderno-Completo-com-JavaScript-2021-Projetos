for(var i =0; i<10;i++){
    console.log(i)
}
console.log('i -', i) //por ser var, fora do escopo, ele sai e mostra 10 (valor que o fez sair do loop)

console.log('----------------------')

const funcs = []

for(var i =0; i<10;i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//terceira função add no array
funcs[8]()//oitava função add no array

//retornou o mesmo valor para ambos por causa da falta de escopo de bloco do VAR