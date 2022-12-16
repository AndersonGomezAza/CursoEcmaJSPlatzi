//Promises
const anotherFunction = () => {
    return  new Promise((resolve, reject) => {
        if (true){
            resolve('Hey que bien');
        } else {
            reject('No funciona como esperabas');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(()=>{
        console.log('Ejecuacion Terminada');
    });