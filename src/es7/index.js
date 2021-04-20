//Lesson 5: ¿Qué se implementó en ES7?
//.include(x), busca x dentro del array y devuelve true o false
let numbers = [1, 2, 3, 7, 8];

if(numbers.includes(9)) {
    console.log('Sí se encuentra el valor 7');
} else {
    console.log('No se encuentra.')
}

//elevar a la potencia, usarmos el nuevo operador **
let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);