const obj = {
    name : 'Oscar',
    age: 32,
    country: 'MX',
};

let { name, ...all } = obj;
console.log(name, all);
//output {age: 32, country: 'MX'}

//aquí podemos "sacar" un dato y mostrar los demás
let {country, ...all2} = obj;
console.log(all2);
//output {name: 'Oscar', age: 32}

const obj = {
    name: 'Oscar',
    age: 32
};

//Podemos unir objetos con el spread operator ...
//esto une el obj1 con el obj
const obj1 = {
    ...obj,
    country: 'MX'
};

console.log(obj1);
//output { name: 'Oscar', age: 32, country: 'MX' }

//asdasd promise finally

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject (new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

//Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
//output: 2018 04 20
