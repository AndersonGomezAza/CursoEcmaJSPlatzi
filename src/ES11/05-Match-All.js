const regex = /\b(Apple)+\b/g
const fruits = 'Apple, Banana, Kiwi, Apple, Orange';

for (const match of fruits.matchAll(regex)){
    console.log(match);
}