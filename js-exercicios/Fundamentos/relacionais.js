console.log('01 -', '1' == 1) //igual, operador relacionar
console.log('02 -', '1' === 1) //igual em VALOR E TIPO, operador relacionar
console.log('03 -', '3' != 3)//diferente
console.log('04 -', '3' !== 3)//estritaente diferente, em valor e tipo
console.log('05 -', 3 < 2)
console.log('06 -', 3 > 2)
console.log('07 -', 3 <= 2)
console.log('08 -', 3 >= 2)

const d1 = new Date(0) //01/01/1970
const d2 = new Date(0)
console.log('09 - ', d1 === d2)
console.log('10 - ', d1 == d2)//estes dois são iguais, lembrando que objetos apontam para endereços de memoria, então tem sempre mesmo valor e atributo

console.log('11 - ', d1.getTime() == d2.getTime()) //como são numeros, serão iguais

console.log('12 - ', undefined == null)
console.log('13 - ', undefined === null)