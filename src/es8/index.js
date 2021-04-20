//Lesson 6: ¿Qué se implementó en ES8?

//Object.entries(object), devuelve una matriz a partir de un objeto
//en este caso devuelve un array que tiene como elementos internos
//3 arrays de 2 elementos tipo string cada uno
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
};

const entries = Object.entries(data);
console.log(entries);
//al ser un array, ahora podemos saber su length
console.log(entries.length);

//Object values, devuelve un array CON LOS VALORES que tiene el objeto
//output: ['Oscar', 'Isabel', 'Ana']
const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

const values = Object.values(data);
console.log(values);
//al ser un array, también podemos saber su cantidad de elementos
//output: 3
console.log(values.length);

// padding, padStart, agrega al inicio del string una cadena nueva,
//al hacer esto la concatena
const string = 'hello';
console.log(string.padStart(7, 'hi'));
//output: hihello
console.log(string.padEnd(12, ' -----'));
//output: hello -----
console.log('food'.padEnd(12, '  -----'));

//Ya se puede usar , a pesar que no siga un nuevo atributo dentro
//de un objeto
const obj = {
    name = 'Oscar',
}

//Lesson 7: Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();