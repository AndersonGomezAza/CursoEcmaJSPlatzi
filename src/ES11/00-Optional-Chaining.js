const users = {
    anderson: {
        country: 'CO',
    },
    ana: {
        country: 'MX',
    },
    camilo: {
        country: 'PE',
    },
}

console.log(users?.anderson?.country);
console.log(users?.anderson?.age);
console.log(users?.bebeloper?.country);//Con ? es optional que mire si existe o no pero sin romper el programa