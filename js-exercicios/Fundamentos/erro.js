function tratarErroLancar(erro){
    throw new Error ('Ocorreu erro de processamento')
}

function imprimirNomeGritado(obj){

    try{ //julgo que haverá um erro aqui
        console.log(obj.name.toUpperCase() + '!!!') //NAME

    } catch (e){ //se gerar erro, cai aqui
        tratarErroLancar(e)

    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)//NOME

//INDUZINDO ERRO AQUI