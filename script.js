let person = {
  navn: "Donald",
  alder: 31,
  by: "Andeby",
  haircolor: "white",
  car: "313",
  nephews: 3,
  pets: "dog",
  girlfriend: "Dolly",
};

let person1 = {
  navn: "Dolly",
  alder: 29,
  by: "Andeby",
  hairAccessories: "Pink bow",
  car: "313",
  nieces: 3,
  pets: "no pets",
  girlfriend: "Donald",
};

let message = "God morgen, ";
let personName = person.navn;
let finalMessage = message + personName;
console.log(finalMessage);

let message1 = "God morgen, ";
let person1Name = person1.navn;
let helloMessage = message + person1Name;
console.log(helloMessage);

let message2 = "Håper det går bra med niesene dine, ";
let person2Name = person1.navn;
let answerMessage = message2 + person1Name;
console.log(answerMessage);

let message3 = "Takk som spør, de har det helt supert, ";
let person3Name = person.navn;
let niceMessage = message3 + person.navn;
console.log(niceMessage);

let message4 = "Hva er skiltnummeret på bilen din, ";
let personName4 = person.navn;
let questionMessage = message4 + person.navn;
console.log(questionMessage);

let message5 =
  "For et tilfeldig spørsmål, men jeg skal selvfølgelig svare. Det er ";
let carnumber = person.car;
let answerQuestion = message5 + person.car;
console.log(answerQuestion);

let message6 =
  "Siden vi er inne på spørsmål vi burde huske svaret på, hvor gammel er du ";
let personName6 = person1.navn;
let ageQuestion = message6 + person1.navn;
console.log(ageQuestion);

let message7 =
  "Det skal du aldri spørre en and i sin beste alder om, men siden du spør så fint så skal jeg svare. Jeg er ";
let ageDolly = person1.alder;
let ageAnswer = message7 + person1.alder;
console.log(ageAnswer);

let frukt = ["eple", "pære", "banan", "appelsin"];

let film = ["interstellar", "pulp-fiction", "The Matrix", "The incredibles"];

let topMovies = film;

console.log(film);

let bestFruits = frukt;

console.log(frukt);
