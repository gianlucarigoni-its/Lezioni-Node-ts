// console.log('I\'m a log');
// console.info('info log');
// console.warn('warn log');
// console.error('error log');

// var test = 'ciao';  //da non usare

// let test1 = 'ciao1';

// console.log(test1);
// test1 = 'ciao mondo';
// console.log(`${test1}, sono Enrico`);

// // const testConst = 'const variable';
// // testConst = 'test cambio costante';

// let longText = `ciao
// asdasda`
// console.log(longText);

// test1 = 1;
// test1 = false;
// test1 = null;
// test1 = {
//     prop1: 'ciao'
// }
// test1 = new Date();
// test1 = undefined;

// test1 = ['asd', 1, false, null, new Date()];
// console.log(test1[10]);
// test1[10] = 'decimo elemento';

// console.log(test1);


// console.log(test1.length);
// test1.push('ciao2');
// console.log(test1.length);


// let prezzoNetto = 50;
// let sconto = 30;
// let prezzoScontato = prezzoNetto - (prezzoNetto * sconto/100);

// console.log(prezzoScontato);

// let baseStr = 'Il prezzo è: ';
// console.log(baseStr + prezzoScontato);

// let testEmpty = {};

// if (!testEmpty) {
//     // entro se la variabile è null o undefined
//     console.log('la variabile è null o undefined')
// }

// if (!!testEmpty) {
//     // entro se la variabile ha un valore
//     console.log('la variabile ha un valore')
// }

function greet(name, lastName) {
    console.log(`Hello ${name} ${lastName}!`);
}

greet('Enrico', 'Battistella');
greet('Pippo', 'Battistella');

// function getPrice(prezzoNetto, sconto) {
//     return prezzoNetto - (prezzoNetto * sconto/100);
// }

let getPrice = function(prezzoNetto, sconto) {
    return prezzoNetto - (prezzoNetto * sconto/100);
}

getPrice = function(prezzoNetto, sconto) {
    return prezzoNetto * sconto;
}

const tempVar = getPrice(100, 20)
console.log(tempVar);

// let double = function(num) {
//     return num * 2;
// }

let double = num => num * 2;

const data = [2, 4, 6, 8, 10];

const mapped = data.map(double);
console.log(mapped);

this.testValue = 'prova';

function testFn2(num) {
    return num *2;
}

let testFn = (num) => {
    return num * 2;
}

// function map(arr, fn) {
//     const result = [];
//     for(let item of arr) {
//         result.push(fn(item));
//     }
//     return result;
// }

// map(data, double);

let score = 19;
// let result;

// if (score >= 18) {
//     result = 'passato';
// } else {
//     result = 'fallito';
// }

let result = score >= 18 ? 'passato' : 'fallito';

for(let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

for(let item of data) {
    console.log(item);
}