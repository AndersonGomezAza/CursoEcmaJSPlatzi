let numbers = [1,2,3,4,5,6,7];
console.log(numbers.includes(20));
const  names = ['Oscar', 'David', 'Ana'];
console.log(names.includes('Oscar'));
const letras = { a: 1, b: 2, c: 3 }
"a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true