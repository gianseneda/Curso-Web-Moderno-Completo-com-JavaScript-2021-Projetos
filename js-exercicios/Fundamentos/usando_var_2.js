var numero = 1;
{
    var numero = 2;
    console.log('dentro -', numero)
}

console.log('fora -', numero) //ambas estão no mesmo escopo e, por isso, o 2 vai sobreescrever o 1, ambos aparecerão 2.