//Con la Variable se puede reasignar las variables scope global
var lastname = 'david';
lastname = 'oscar';
console.log(lastname);

//let alcance de bloque
let fruit = 'apple';
fruit = 'kiwi';
console.log(fruit);

//const No se puede reasignar su valor 
const animal = 'Dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'apple'; //function Scope
        let fruit2 = 'kiwi'; // block Scope
        const fruit3 = 'banana'; //block Scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
