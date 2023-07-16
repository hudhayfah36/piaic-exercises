// 2.
const personName = "huzaifa";
console.log(`Hello ${personName}, would you like to learn some Python today?`);

// 3.
const upperPersonName = personName.toUpperCase();
console.log(upperPersonName);

const lowerPersonName = personName.toLowerCase();
console.log(lowerPersonName);
// can't use titleCase() method with personName 

// 4.
console.log('Allama Iqbal once said "I have never considered myself a poet. I have no interest in poetic artistry."')

// 5.
const famousPerson = "Allama Muhammad Iqbal";
const quote = "People who have no hold over their process of thinking are likely to be ruined by liberty of thought. If thought is immature, liberty of thought becomes a method of converting men into animals.";

console.log(`${famousPerson} once said "${quote}"`)

// 6.
const name1 = "\t huzaif \n";
console.log(name1.trim());

// 7.
console.log(6 + 2);
console.log(10 - 2);
console.log(4 * 2);
console.log(80 / 10);

// 9.
const fvrtNumber = 72;
console.log(`my favourite number is ${fvrtNumber}`);

// 10.
// its just a comment 

// 11.
const names = ["Abbas","Hassan","jaffar" ];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// 12.
console.log(`Salam ${names[0]}`);
console.log(`Salam ${names[1]}`);
console.log(`Salam ${names[2]}`);

// 13.
const transportaionName = ["car","motorbike","plane"];
console.log(`I would like to own a Ford ${transportaionName[0]}`);
console.log(`I would like to own a Kawasaki ${transportaionName[1]}`);
console.log(`I would like to own a piper ${transportaionName[2]}`);

// 14.
let guestList = ["Hamza","Haroon","Abdul Qadir Bedil"];
console.log(`${guestList[0]} you are invited`);
console.log(`${guestList[1]} you are invited`);
console.log(`${guestList[2]} you are invited`);

// 15.
guestList[1] = "Hashir";
console.log(`${guestList[0]} you are invited`);
console.log(`${guestList[1]} you are invited`);
console.log(`${guestList[2]} you are invited`);

// 16.
guestList.push("Abdul Rehman","Abdul Ahad","Abdul Hannan");
// you can also use loop
console.log(`${guestList[0]} you are invited`);
console.log(`${guestList[1]} you are invited`);
console.log(`${guestList[2]} you are invited`);
console.log(`${guestList[3]} you are invited`);
console.log(`${guestList[4]} you are invited`);
console.log(`${guestList[5]} you are invited`);

// 17.
const eliminatedOne = guestList.pop();
console.log(`${eliminatedOne} sorry you cant come`);
const eliminatedTwo = guestList.pop();
console.log(`${eliminatedTwo} sorry you cant come`);
const eliminatedThree = guestList.pop();
console.log(`${eliminatedThree} sorry you cant come`);
const eliminatedFour = guestList.pop();
console.log(`${eliminatedFour} sorry you cant come`);

console.log(`guestList[0] you are still invited , don't worry`);
console.log(`guestList[1] you are still invited, don't worry`);

// 18.
const fivePlaces = ["Samarra" , "Al-Basra" , "Iran" , "Palestine" , "Afghanistan" ];
console.log(fivePlaces);
const sortedPlaces = fivePlaces.sort();
console.log(sortedPlaces);
const reversedPlaces = fivePlaces.reverse();
console.log(reversedPlaces);
console.log(fivePlaces);


// 19.
console.log("I am inviting 2 people to dinner");

// 20.
const languages = ["Arabic","Farsi","Urdu","English"];
for (let language in languages) {
    console.log(language);
};

// 21.
const languagesObj = {
    UAE : "Arabic",
    Iran : "Farsi",
    Pakistan : "Urdu",
    London : "English"
};


// 22.
// Error 

// const arrayWithError = [1,2,3,4];
// console.log(arrayWithError[4]);

// the above 2 lines will generate an error ::


// 23.

let car = "Supra";
let genOut = car === "Supra" ? "The perfect one" : "Come on Man make your choice better";
console.log(genOut);

const door = "Wooden";
const genOut1 = door === "Wooden" ? "Wooden door is the only perfect door" : "wooden door is better than any other door ";


// 24.
const string1 = "huzaif";
if (string1 === "huzaif") {
    console.log(`welcome ${string1}`);
}

const string2 = "Hello world";
const isLowerCase = string2.toLowerCase() === string2;

if (isLowerCase) { 
    console.log("The string is in lower case");
} else {
    console.log("the string is not in lower case");
}

const number2 = 12;
if (number2 === 12){
    console.log("guessed the right number");
} else {
    console.log("sorry you guessed the wrong number");
}

const number3 = 1;
if (number3 == 1 || number3 == 12) {
    console.log("guessed the right number");
} else {
    console.log("guessed the wrong number");
}

const number4 = 32 ;
if (number4 === 32 && number4 === 23) {
    console.log("guessed the wrong ");
} else {
    console.log("kuch bhi");
}


const firstArray = [3,4,6,7];
if (firstArray.includes(6)){
    console.log("the number 6 is in array");
} else { 
    console.log("the number 6 is not in array");
}

if (!firstArray.includes(1)){
    console.log("the number 1 is not in array");
} else {
    console.log("the number 1 is in array");
}


// 25.
const alienColor = "green";
if (alienColor === "green") {
    console.log("player just earned 5 points");
} else {
    console.log("");
}

// 26.
const alienColor1 = "green";
if (alienColor1 === "green") {
    console.log("player just earned 5 points");
} else {
    console.log("player just earned 10 points");
}


// 27.
const alienColor3 = "green";

if (alienColor3 === "green") {
    console.log("player earned 5 points");
} else if (alienColor3 === "yellow") { 
    console.log("player earned 10 points");
} else if (alienColor3 === "red") {
    console.log("player earned 15 points");
}

// 28.
const personAge = 13;

if (personAge < 2){
    console.log("you are a baby");
} else if (personAge > 2 && personAge < 4) {
    console.log("you are a toddler");
} else if (personAge > 4 && personAge < 13) {
    console.log("you are a kid");
} else if (personAge > 13 && personAge < 20) {
    console.log("you are a teenager");
} else if (personAge > 20 && personAge < 65) {
    console.log("you are an adult");
} else {
        console.log("you are an elderly person");
}


// 29.
const fvrtFruits = ["Mango" , "Banana" , "Aam" , "Kela"];

if (fvrtFruits.includes("Mango")) {
    console.log("Hurrah array includes mango ,your fvrt fruit")
} else if (fvrtFruits.includes("Banana")){
    console.log("Hurrah array includes banana , your fvrt fruit");
} else if (fvrtFruits.includes("Aam")){
    console.log("aam is in your array");
} else if (fvrtFruits.includes("Kela")){
    console.log("kela is in your array");
} else {
    console.log("nahi mojood !!");
}

// 30.
const userNames = ["admin", "user1", "user2", "user3", "user3"];

for (let i = 0;i < userNames.length;i++){
    if (userNames[i] === "admin"){
        console.log("WELCOME Admin");
    } else {
        console.log(`hello ${userNames[i]} thank you for logging in again `);
    }
}

// 31.

const userNames1 = [];
if (userNames1.length === 0){
    console.log("We need some users");
} else {
    for (let i = 0; i < userNames1.length;i++){
        if (userNames1[i] === "admin"){
            console.log("hello admin");
        } else {
            console.log(`hello ${userNames1[i]}`);
        }
    }
}

// 32.
const currentUsers = ["user1","user2","user3","user4","user5"];
const newUsers = ["users1", "user2","user6","user7","user8"];

for (let i = 0;i < newUsers.length;i++ ){
    let newUserName = newUsers[i];
    let isDuplicate = false;

    for (let j = 0; j<currentUsers.length;j++){
        if (currentUsers[j] === newUserName){
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate){
        console.log(`The username ${newUserName} is already taken`);
    } else {
        console.log(`the username ${newUserName} is available`);
    }
}

// 33.
const numbers = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length;i++){
    const number = numbers[i];
    let ordinal;

    if (number === 1){
        ordinal = "st";
    } else if (number === 2){
        ordinal = "nd";
    } else if (number === 3){
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(number + ordinal);
}

// 34.

const fvrtPizza = ["perpperoni","fajita","bbq"];
for (let i = 0;i<fvrtPizza.length;i++){
    let pizza = fvrtPizza[i];
    console.log(`i like ${pizza} pizza`);
}
console.log("i like the pizza");

// 35.
const animals =["dog","cat","rabbit"];

for (let i = 0 ; i < animals.length ; i++){
    let animal = animals[i];
    console.log(`${animal} is a great pet`);
}
console.log("any of these animals, make a great poet");

// 36.
function makeShirt(size,message){
    console.log(`shirt size is ${size} and the message is ${message}`);
}
makeShirt('S',"hello world");

// 37.
function makeShirtl(size = "L",message = "i love typescript"){
    console.log(`the shirt size is ${size} and the message is ${message}`);
}

makeShirtl();
makeShirtl("medium");
makeShirtl("medium","hello javascript");

// 38.
function describeCity(city = "lahore",country = "pakistan"){
    console.log(`${city} is in ${country}`);
}

describeCity("multan","pakistan");
describeCity("karachi","pakistan");
describeCity("islamabad","pakistan");


// 39.
function cityCountry(city,country){
    return `${city},${country}`
}

console.log(cityCountry("lahore","pakistan"));
console.log(cityCountry("islamabad","pakistan"));


// 40.
