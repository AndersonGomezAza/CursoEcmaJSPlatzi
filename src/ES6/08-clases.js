//declarando clase
class User {}

//Instanciando la clase
const newUser = new User();


class User2 {
    //metodos
    greeting(nombre){
        return  `Hola te estoy saludando ${nombre}`;
    }
};
const newUser2 = new User2;
console.log(newUser2.greeting('newUser2'));
//Herencia
const developer = new User2;
console.log(developer.greeting('Developer'));

//clase con constructor
class User3 {
    //Constructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(nombre){
        return  `Hola ${nombre} te estoy saludando desde User3`;
    }
};
const newUser3 = new User3;

//this: elemento padre que lo contiene
class User4 {

    //Constructor
    constructor(name ){
        this.name = name
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return  `${this.speak()} ${this.name}`;
    }
};
const newUser4 = new User4('Anderson');
console.log(newUser4.greeting());


//setters and getters
class User5 {

    //Constructor
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }

    //setters y getters
    get getName(){
        return this.name;
    }
    get getAge(){
        return this.age;
    }
    set setName(name){
        this.name = name
    }
    set setAge(age){
        this.age = age
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return  `${this.speak()} ${this.name}`;
    }
};

const getSet = new User5('David', 15);
console.log(getSet.getAge);
console.log(getSet.setAge = 20);