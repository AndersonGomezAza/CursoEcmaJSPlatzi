//Spread operator
let person = {
    name: 'Oscar',
    age: 28
};
let country = 'MX';
let data = {
    id: 1,
    ...person, //Asigna todo lo que este dentro del objeto person
    country
};
console.log(data);

// Rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);