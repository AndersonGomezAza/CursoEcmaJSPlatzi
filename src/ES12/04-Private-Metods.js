// # Vuelve los metodos privados y solo pueden ser utilizados dentro de la clase
class User5 {
    //Constructor
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }

    //setters y getters
    get uName(){
        return this.name;
    }
    set uName(name){
        this.name = name
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(age){
        this.age = age
    }

    #speak(){
        return 'Hello';
    }

    greeting(){
        return  `${this.speak()} ${this.name}`;
    }
};

const getSet = new User5('David', 15);
console.log(getSet.getAge);
console.log(getSet.setAge = 20);