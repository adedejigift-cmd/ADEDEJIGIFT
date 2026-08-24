// 1. Create a variable called bunny using var and assign it your bunny's name. Then declare dog with let and cat with const. Print all three names.
var bunny = "cutie"
let dog = "gerald"
const cat = "muse"

console.log(bunny);
console.log(dog);
console.log(cat);

// 2. Which of these names are allowed in JavaScript? For each one, write valid or invalid, then write a correct version of any invalid name.
                             //correct version 
let 1bunny =  'invalid'      (bunny1)
let _bunny = 'valid'
let $bunny = 'valid'
let -bunny = 'invalid'       (bunny)
let @bunny = 'invalid'        (bunny)
let bunnyName = 'valid'



// 3. Predict the output, then run the code. In one or two sentences, explain why var and let behave differently here.

console.log(pet);
var pet = 'lucy';
undefined
REASON = ('var can be used before it is given a value')


console.log(animal);
let animal = 'tom';
//  Uncaught ReferenceError: Cannot access 'animal' before initialization
REASON = ('let cannot be used before it is declared')


// 4. Write two short examples:

// a local variable inside a function called animalName
// a global variable that the same function can still print
// Call the function and show both results.

// 5. Declare a variable named bunny and assign it an object with:

let name = 'Gift'
let age = 17
let IsHappy = true

console.log(name)
console.log(age)
console.log(IsHappy)

// 6. For each value below, print the value and its type using typeof:

console.log(typeof 3.14)
console.log(typeof 'Lucy')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Symbol('Lucy'))
console.log(typeof { name: 'Lucy' })
console.log(typeof ['Lucy', 'Tom'])

// 7. Create an array called mixedDataTypes that holds at least one boolean, one number, one string, null, undefined, and one object. Print the array and its length.

let mixedDataTypes = [
    true,
    17,
    "Gift",
    null,
    undefined,
    {level:100}
];

console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

// 8. Write a function sumBunnies that has no parameters. Inside it, create blackBunnies = 10 and whiteBunnies = 20, add them, and return the total. Call the function and print the result.
function sumBunnies() {
    blackBunnies = 10,
    whiteBunnies = 20;

    let total = blackBunnies + whiteBunnies

    return total;
}
    console.log(sumBunnies())

// 9. Rewrite sumBunnies so it takes two parameters, blackBunnies and whiteBunnies. Call it with sumBunnies(10, 20) and with sumBunnies(7, 3).
function sumBunnies(blackBunnies,whiteBunnies) {
    let total = blackBunnies + whiteBunnies

return total
}
console.log(sumBunnies(10,20));

console.log(sumBunnies(7,3))
 
// 10. Rewrite question 9 as:
let ade = function(blackBunnies , whiteBunnies) {
    return (blackBunnies + whiteBunnies)
}
let derin = (blackBunnies , whiteBunnies) => {
    return (blackBunnies + whiteBunnies)
}
console.log(ade(10,20))
console.log(derin(7,3))


// 11. Write an IIFE that adds 10 black bunnies and 20 white bunnies and prints the total as soon as the file runs. Do not call it by name afterwards.
(function(){
    console.log(10 + 20)
})();

// 12. Create an array called bunnies with six bunny names.
let bunnies = ['Lucy','cutie','Hola','Ola','ade','derin']
bunnies.unshift('luigi')
bunnies.push('Mario')

console.log(bunnies)

let Lucy = bunnies.indexOf("Lucy")
bunnies.splice(Lucy,1)

console.log(bunnies)

// 13. Using this array:

const bunni = ['Lucy', 'Tom', 'Molly', 'Bella'];

console.log(bunni[0])
console.log(bunni.indexOf('Tom'))

// 15. Using this nested array:
const nestedArrays = [
  ['Lucy', 'Tom'],
  ['Molly', 'Bella'],
];
console.log(nestedArrays[0][0])
console.log(nestedArrays[1][1])

for (let group of nestedArrays){
    for (let name of group)
        console.log(name)
}

// 16. Create a JavaScript object called bunny with name, age, and isHappy. Convert it to JSON, store it in bunnyJSON, and print bunnyJSON.
let bunny = {
    name:'Mario',
    age : 17,
    isHappy: true
};
let bunnyJSON = JSON.stringify(bunny)

console.log(bunnyJSON);

// 17. Start with this JSON string:

let bunny_JSON = '{"name":"Lucy","age":3,"isHappy":true}';

let bunnie = JSON.parse(bunnyJSON)
console.log(bunnie.name);
console.log(bunnie.age);

// 18. Given:

let bunny_age = 3;
let dog_age = '3';
console.log(bunny_age);
console.log(dog_age);

bunny_age == dog_age ('It convert or  data types to before comparing the values')
bunny_age === dog_age ('It checks both values and datatypes')
bunny_age != dog_age('It check if value is not equal to')
bunny_age !== dog_age ('it check if types or value is different')


// 19. Create two arrays, bunnies and dogs, with any number of names. Use <= to compare their lengths.
let bunn = ['Erica','Molly' ,'Max']
let dogs = ["bingo", "sniper", "Buddy", "Rocky", "Jack"]

if (bunn.length<=dogs.length){
    console.log("There are more dogs than bunn");
} else {
    console.log("There are more bunn than dogs");
    
}

// 20. A bunny's health can be 'healthy', 'sick', or anything else.
let bunny = 'healthy'

if (bunny=== "healthy"){
    console.log('the bunny is healthy');
} else if(bunny ==='sick') {
    console.log('the bunny is sick');
} else {
    console.log('unknown health status');
    
}

switch (bunny) {
    case "healthy":
        console.log('the bunny is heaithy');
        
        break;

    case "sick":
        console.log("the bunny is sick");
        break;
           

    default :
        console.log('unknowm health status');
        break;
}

let result = bunny == "health"
    ? "the bunny is healthy"
    : "the bunny is sick"
        console.log(result);


// 21. Write a function that takes a number and uses a ternary operator to return 'even' or 'odd'. Test it with 4, 7, and 0
function checkNumber (Number) {
    return Number % 2 === 0 ? "Even":"Odd"
}
console.log(checkNumber(4));
console.log(checkNumber(7));
console.log(checkNumber(0));

// 22. Write a for loop that prints Number 0 through Number 9.
for (let i = 0; i <=9; i++) {
    console.log('Number' + i)
} 

 let i = 0 

while (i<=9) {
    console.log("number" + i );
    i++;
}
// 23. Write a while loop that counts down from 9 to 1 and prints each number. Then write the same countdown with a for loop.
let i = 9
while (i>=1) {
    console.log(i)
}
for (let i = 9; i >= 1; i--) {
    console.log(i);
}

// 24. Write sumBunnies(blackBunnies, whiteBunnies) so that it throws an error if either argument is not a number. Wrap a call to sumBunnies(10, 'twenty') in try / catch and print the error message.
function sumBunnies(blackBunnies,whiteBunnies) {
}

// 25. Using the operators from this topic, write one small program that:
let blackBunnies = 10 
let whiteBunnies = 5
console.log(blackBunnies===whiteBunnies);
let total = blackBunnies + whiteBunnies
console.log(total);

console.log(total > 12);

let answer = total > 12 ? "yes":"no"
console.log(answer);


    