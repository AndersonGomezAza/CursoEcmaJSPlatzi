const string = 'Hello';
console.log(string.padStart(7, 'Hi'));
console.log(string.padStart(string.length+1, 'Hi'));//Rellena el resto de la palabra con la palabra que le digamos al inicio 
console.log(string.padEnd(string.length+1, 'Hi'));//Rellena el resto de la palabra con la palabra que le digamos al final 