// Задание 1
//  function arrayRandomNumbers(a,b) {
//     let c = 0;
//     let arr = [];
//     for (let i = 0; i < a; i++) {
//         arr.push(Math.floor(Math.random() * (b - c)) + c);
//     }
//     return arr;
//  }
//  console.log(arrayRandomNumbers(10,5));

// Задание 2

// let firstArray = ['sex','drugs','rock and roll']
// let secondArray = ['egalite', 'fraternite', 'liberte']
// let thirdArray = ['Patria','o','muerte']

// function arraySplicer(a,b) {
//     let arrNew = a
//     if (a.includes(b, 0) == true) {
//         arrNew.splice(arrNew.indexOf(b,0),1)
//     }
//   return arrNew
// }
// console.log(arraySplicer(firstArray, 'drugs'));
// console.log(arraySplicer(secondArray, 'mort'));
// console.log(arraySplicer(thirdArray, 'muerte'))

// Задание 3

// function getArr() {
//   let array = [];
//   let arraySecond;
//   do {
//     arraySecond = prompt("Введите элементы массива:");
//     if (isNaN(Number(arraySecond)) === false) {
//       array.push(+arraySecond);
//     } else if (
//       typeof arraySecond === "string" &&
//       arraySecond !== "true" &&
//       arraySecond !== "undefined" &&
//       arraySecond !== "false" &&
//       arraySecond !== "null"
//     ) {
//       array.push(arraySecond);
//     } else if (arraySecond == "undefined") {
//       array.push(undefined);
//     } else if (arraySecond == "true") {
//       array.push(true);
//     } else if (arraySecond == "false") {
//       array.push(false);
//     } else if (arraySecond == "null") {
//       array.push(null);
//     }
//   } while (arraySecond !== null);
//   array.pop();
//   return array;
// }

// console.log(getArr());

// Задание 4

const arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];

// 4.1 - вернуть массив из объектов, состоящих из имени, фамилии и возраста (name, surname,
// age). Если значение какого-либо из свойств не извеcтно, присвоить ему значение null.
// Отсортировать его в алфавитном порядке, но основании фамилии (surname)
// const arrUser = arrayOfPersons.map((person) => {
//   return {
//     name: (typeof person.name === "string") ? person.name : null,
//     surname: (typeof person.surname === "string") ? person.surname : null,
//     age: (typeof person.age === "number") ? person.age : null,
//   }
// });
// console.log(arrUser);

// 4.2 - вернуть массив объектов, обладающих не менее чем восемью свойствами и
// отсортировать их по убыванию количества свойств;

// const newArr = [];
// arrayOfPersons.forEach((item) => {
//   if (Object.keys(item).length >= 8) {
//     newArr.push(item);
//   }
//   newArr.sort((a, b) =>
//     Object.keys(a).length > Object.keys(b).length ? 1 : -1
//   );
// });
// console.log(newArr);

// 4.3 - отсортировать массив в порядке возрастания возраста объектов (age)

// const newArr = arrayOfPersons.sort((a, b) => a.age - b.age);

// console.log(newArr);

// 4.4 - вернуть массив объектов, обладающих свойством "знак зодиака" (zodiacSign)

// const newArr = [];
// arrayOfPersons.map((person) => {
//   if (typeof person.zodiacSign === "string") {
//     newArr.push(person);
//   }
// });
// console.log(newArr);

// 4.5 - отсортировать массив таким образом, что в начале списка оказывались объекты,
// обладающие свойством-объектом или свойством-массивом

// let sortObject = function (person) {
//   for (let key in person) {
//     if (typeof person[key] === "object") {
//       return -1;
//     }
//   }
//   return 1;
// };

// const newArr = arrayOfPersons.map((person) => {
//   return person
// }).sort(sortObject)

// console.log(newArr);

// 4.6 - вернуть массив объектов, добавив им свойсвойство id, присвоив ему случайное
// уникальное трехзначное число

// const newArr = arrayOfPersons.map((person) => {
//   person.id = Math.floor(Math.random(person) * (999 - 100));
//   return person;
// })

// console.log(newArr)

// 4.7 - вернуть массив объектов, являющихся вымышленными персонажами
// (isFictionalCharacter: true), после чего присвоить каждому из объектов свойство
// fictionalUniverse со значением null.

const newArr = []
arrayOfPersons.forEach((person) => {
  if (person.isFictionalCharacter == true) {
    person.fictionalUniverse = null;
    newArr.push(person);
  }
});
console.log(newArr);
