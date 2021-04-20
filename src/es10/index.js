//ES10
//aplana un array
let array = [1, 2, 3, [1,2,3 [1,2,3]]];

console.log(array.flat(2));

//flatMap es aplanar y hacer operaciones
let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value *2]));

//limpiar espacios en blanco de un string, .trimStart()
let hello = '                  hello world';
console.log(hello);
console.log(hello.trimStart());

//eliminar espacios al final de un string, .trimEnd()
let hello = 'hello World            ';
console.log(hello);
console.log(hello.trimEnd());

//cambios en try catch, no tener que pasar un valor de error

try {

} catch {
    error
}

// convertir un array en un objeto

let entries = [['name', 'oscar'], ['age', 32]];

console.log(Object.fromEntries(entries));
//output: { name: 'oscar', age: 32 }

//objeto tipo symbol, ahora se puede acceder a su descripción

let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
console.log(globalThis);