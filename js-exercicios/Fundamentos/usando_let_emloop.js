for(let i =0; i<10;i++){
    console.log(i)
}
//console.log('i = ', i) //não vai retornar nada - i is not defined

console.log('----------------------')

const funcs =[]

for (let j =0; j<10; j++){
    funcs.push(function(){
        console.log(j)
    })
}

funcs[2]() 
funcs[8]() //aqui se manterão os valores devido ao LET