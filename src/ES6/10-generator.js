function* iterate(array){//El * despues del function es para definir que es un generator
    for (let value of array) {
        yield value;
    }
}
const it = iterate(['Oscar','Anderson','David','Ana','Ulises']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

export function* getId(){//El * despues del function es para definir que es un generator
    for (let idMichi = 0; idMichi < 100; idMichi++) {
        yield idMichi;
    }
}
const idMichis = getId();
console.log(idMichis.next().value);
console.log(idMichis.next().value);
console.log(idMichis.next().value);
console.log(idMichis.next().value);