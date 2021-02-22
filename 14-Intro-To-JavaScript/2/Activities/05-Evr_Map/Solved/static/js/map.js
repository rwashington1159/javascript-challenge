let theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Using the .map method
let mapSimpleArray = theStagesOfJS.map(function(item) {
  return item;
});

console.log(mapSimpleArray);

// Map will also provide the index position of the array.
// This is similar to enumerate in Python.
let mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
  return `Stage ${index}: ${item}`;
});

console.log(mapArrayWithIndex);

// Note: The original array is unchanged
console.log(theStagesOfJS);

// Mapping over an array of objects
let students = [
    { name: "Malcolm", score: 80 },
    { name: "Zoe", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Wash", score: 79 }
];

let names = students.map(function(student) {
  return student.name;
});

let scores = students.map(function(student) {
  return student.score;
});

// Map vs forEach
// Part A
let forEachStages = theStagesOfJS.forEach(function(each, index) {
  // the return of forEach is ignored
  return `Stage ${index + 1}: ${each}`;
});

// undefined
console.log(forEachStages);

// unaltered
console.log(theStagesOfJS);

// Part B
theStagesOfJS.forEach(function(each, index) {
  // The original array is mutated with forEach
  theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
});

// Note that the original array has been altered (mutated)
console.log(theStagesOfJS);

// Challenge Activity!
let princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});

// Create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);
