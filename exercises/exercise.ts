
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
console.log(fivePlaces.sort());
console.log(fivePlaces.reverse())


// 19.


