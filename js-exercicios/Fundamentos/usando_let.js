var numero = 1; //pode ser LET aqui tb
{
    let numero = 2;
    console.log('dentro -', numero) //2, por causa do escopo do let
}
console.log('fora -', numero); //1, escopo global do var