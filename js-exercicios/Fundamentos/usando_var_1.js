{
    {
    {
        var sera = 'Será?'//escopo/bloco
    }
}
}

console.log(sera) //aparece pois ela é visível fora do bloco

function teste(){
    var local = 123
    console.log(local) //visivel
}

teste()
console.log(local) //aqui a VAR não aparecerá pois está dentro da função (escopo da função)
