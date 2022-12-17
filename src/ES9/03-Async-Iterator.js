async function* iterator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = iterator();
console.log(other.next().then(response => console.log(response.value)));
console.log(other.next().then(response => console.log(response.value)));
console.log(other.next().then(response => console.log(response.value)));
console.log('Hello!!');

//For
async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['Anderson', 'Camilo', 'Ana']);
console.log('After');