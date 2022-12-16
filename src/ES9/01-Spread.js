const user = {
    username: 'Ander',
    age: 22,
    country: 'CO',
}

const {username, ...values} = user;
console.log(username);
console.log(values);