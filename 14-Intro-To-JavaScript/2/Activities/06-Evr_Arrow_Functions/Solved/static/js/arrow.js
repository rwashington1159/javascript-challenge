let theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
let students = [
  { name: "Malcolm", score: 80 },
  { name: "Zoe", score: 85 },
  { name: "Kaylee", score: 99 },
  { name: "Simon", score: 99 },
  { name: "Wash", score: 79 }
];

// An Arrow function is a new concise syntax for function
// Arrow functions allow us to drop the `function` keyword and just show the parameters.
// Note: The fat arrow `=>` that was added to indicate an arrow function.
let mapArrow1 = theStagesOfJS.map((item) => {
  return item;
});

// We can drop the parentheses around the parameter if there's only one of them,
// but if we include the return keyword we must surround the return statement with curly braces.
let mapArrow2 = theStagesOfJS.map(item => { return item; });
console.log(mapArrow2);

// And finally, we can just drop the `return` keyword. The return is implied.
let mapArrow3 = theStagesOfJS.map(item => item);

// Functions with more than one parameter still need the parenthesis
let mapReturn2 = theStagesOfJS.map((item, index) => {
  return `Stage ${index}: ${item}`;
});

// We can also drop the curly braces here
let mapReturn2 = theStagesOfJS.map((item, index) => `Stage ${index}: ${item}`);

// Map and Arrow makes it really easy to build an array of values for an
// array of objects
let names = students.map(student => student.name);

let scores = students.map(student => student.score);

// Challenge Activity!
let princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
names = princesses.map(princess => princess.name);
console.log("names: ", names);
