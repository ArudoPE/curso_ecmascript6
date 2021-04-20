function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var countru = country || 'MX';
    console.log(name, age, country);
}

//es6 (estableciendo valores por defecto si no pasamos un valor)
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//temnplate literals
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Lesson 2: LET y CONST, Multilínea, Spread Operator y Desestructuración

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
+ "otra frase épica que necesitamos.";
//ES6
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;
console.log(lorem);
console.log(lorem);

//desestructuración
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};
console.log(person.name, person.age);

let {name, age, country } = person;

console.log(name, age, country);


//spread operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);
{
    var globalVar = 'Global Var';
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);

//const no permite reasignar el valor de la variable, es constante
const a = 'b';
a = 'a';
console.log(a);

//Lesson 3: Arrow Functions, Promesas y Parámetros en objetos
let name = 'oscar';
let age = 32;
//es5
obj = {name: name, age: age};
//es6
obj2 = { name, age};
console.log(obj2);

const names = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
];

//arrow functions
//es5
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
//es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const squeare = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error))

//Lesson 4: Clases, Módulos y Generadores
//objetos
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//import { hello } from './module';
//importar un módulo (Archivo externo) y usar una función que está
//dentro de ese módulo externo
const hello = require('./module');
console.log(hello());

//es6 generators:
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
//output: Hello, / World / undefined

//Lesson 5: ¿Qué se implementó en ES7?


