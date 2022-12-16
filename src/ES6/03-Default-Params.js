function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'Bogotá';
    console.log(name, age, country);
}
newUser();
newUser("Anderson", 22, "Colombia");

//Parametros Por Defecto con ECMAScript 6
function newAdmin(name = 'Oscar', age='34', country='Chile') {
    console.log(name,age,country);
}
newAdmin();
newAdmin("Anderson", 22, "Colombia");