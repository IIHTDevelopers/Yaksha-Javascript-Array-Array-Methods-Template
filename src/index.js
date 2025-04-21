// Declaring an array
var fruits = ['apple', 'banana', 'cherry'];

// Using push() to add an element to the end of the array
fruits.push('date');
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// Using pop() to remove the last element of the array
fruits.pop();
console.log(fruits); // ["apple", "banana", "cherry"]

// Using shift() to remove the first element of the array
fruits.shift();
console.log(fruits); // ["banana", "cherry"]

// Using unshift() to add an element to the beginning of the array
fruits.unshift('apricot');
console.log(fruits); // ["apricot", "banana", "cherry"]
