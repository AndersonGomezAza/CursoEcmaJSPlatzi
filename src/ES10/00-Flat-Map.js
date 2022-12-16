//Devuelve una matriz de cualquier submatriz

//flat
const arrayNumber = [1,2,3,4,5, [2,4,6,8, [1,3,5,7,9]]];
console.log(arrayNumber.flat(3));

//flat Map
const array2 = [1,2,3,4,5];
console.log(array2.flatMap(v => [v,v * 2]));