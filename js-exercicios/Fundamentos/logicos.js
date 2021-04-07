function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2

    const comprarTv50 = trabalho1 && trabalho2

    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//ou exclusivo, onde as diferenças retornam FALSE ( v e f, f e v) e duas iguais retornam TRUE (v e v, f e f)

    const comprarTv32 = !!(trabalho1 != trabalho2)//ou exclusivo tb
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //esta não é a forma padrão, por não há atributo e valor, MAS é recurso novo
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))