function newUser(user, age, country, uId) {
    return {
        user,//Si se llaman igual no se tienen que asignar
        age,
        country,
        id: uId,
   }
}
console.log(newUser('Anderson', 34, 'CO', 1));

//Objetos Literales