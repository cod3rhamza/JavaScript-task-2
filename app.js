// Q1. Rewrite the following code using a ternary operator:
// let result;
// if (score >= 80) {
//     result = "Pass";
// } else {
//     result = "Fail";
// }

// let score = 80;

// let result = ((score) >= 80) ? "pass" : "fail";
// console.log(result);


// Q2 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

// const person = {
//     name: "Hamza",
//     address: {
//       street: "lyari",
//       city: "karachi",
//       zipCode: "12345"
//     }
//   };
  

// const zipCode = person.address ? person.address.zipCode : undefined;
// console.log(zipCode);

// const zipCode = person?.address?.zipCode;
// console.log(zipCode);

// Q3 3. Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for in loop

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male"
//   };
  
//   for (const key in person) {
//     console.log(key, person[key]);
//   }
  
// for of loop

//   const numbers = [1, 2, 3, 4, 5];

//   for (const number of numbers) {
//     console.log(number);
//   }
  

// // Q4 Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

// function calculateAverage(numbers) {
//     // Check if the array is not empty
//     if (numbers.length === 0) {
//       return 0; // Return 0 for an empty array to avoid division by zero
//     }
  
//     // Calculate the sum of all numbers in the array
//     const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
//     // Calculate the average by dividing the sum by the number of elements
//     const average = sum / numbers.length;
  
//     return average;
//   }
  
//   // Example usage:
//   const numbersArray = [10, 20, 30, 40, 50];
//   const result = calculateAverage(numbersArray);
//   console.log("Average:", result);
  

// Q5 Explain the concept of "closures" in JavaScript and provide an example of their practical use.

// function outerFunction(x) {
//     // Inner function defined within the outer function
//     function innerFunction(y) {
//       return x + y; // Inner function has access to the 'x' variable from the outer function
//     }
  
//     return innerFunction;
//   }
  
//   // Create a closure by calling outerFunction with a value for 'x'
//   const closureInstance = outerFunction(10);
  
//   // Use the closure to add a value to 'x'
//   const result = closureInstance(5);
//   console.log(result); // Output: 15


// Q6. Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

// // Creating an object named 'student'
// const student = {
//     name: 'Sufyan',
//     age: 20,
//     grades: [85, 90, 75, 95],
  
//     // Method to calculate the average of grades
//     calculateAverage: function () {
//       // Using reduce to sum up all grades and then divide by the number of grades
//       const sumOfGrades = this.grades.reduce((total, grade) => total + grade, 0);
//       const average = sumOfGrades / this.grades.length;
  
//       return average;
//     }
//   };
  
//   // Calling the calculateAverage method
//   const averageGrade = student.calculateAverage();
  
//   // Logging the result
//   console.log(`Average Grade for ${student.name}: ${averageGrade}`);


// Q7. How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// Shallow copy using Object.assign
// const originalObject = { name: 'John', age: 25, grades: [90, 85, 88] };
// const shallowCopy = Object.assign({}, originalObject);

// shallowCopy.name = 'Jane';
// shallowCopy.grades.push(95);

// console.log(originalObject); // { name: 'John', age: 25, grades: [90, 85, 88, 95] }
// console.log(shallowCopy);    // { name: 'Jane', age: 25, grades: [90, 85, 88, 95] }


// // Deep copy using JSON.parse and JSON.stringify
// const originalObject1 = { name: 'John', age: 25, grades: [90, 85, 88] };
// const deepCopy = JSON.parse(JSON.stringify(originalObject1));

// deepCopy.name = 'Jane';
// deepCopy.grades.push(95);

// console.log(originalObject1); // { name: 'John', age: 25, grades: [90, 85, 88] }
// console.log(deepCopy);       // { name: 'Jane', age: 25, grades: [90, 85, 88, 95] }


// // Reference copy
// const originalObject2 = { name: 'John', age: 25, grades: [90, 85, 88] };
// const referenceCopy = originalObject2;

// referenceCopy.name = 'Jane';
// referenceCopy.grades.push(95);

// console.log(originalObject2); // { name: 'Jane', age: 25, grades: [90, 85, 88, 95] }
// console.log(referenceCopy);  // { name: 'Jane', age: 25, grades: [90, 85, 88, 95] }


// Q8. Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//   const result = numbers[i] % 2 === 0 ? 'even' : 'odd';
//   console.log(`${numbers[i]} is ${result}`);
// }

// Q9. Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// for (initialization; condition; iteration) {
//     // code to be executed
//   }

//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   while (condition) {
//     // code to be executed
//   }

//   let y = 0;
//   while (y < 5) {
//     console.log(y);
//     y++;
//   }

//   do {
//     // code to be executed
//   } while (condition);

//   let x = 0;
//   do {
//     console.log(x);
//     x++;
//   } while (x < 5);
  

// //  Q10. Provide an example of using optional chaining within a loop to access a potentially missing property of an object

// const users = [
//     { id: 1, name: 'Hamza', address: { city: 'New York' } },
//     { id: 2, name: 'Dua', address: null },
//     { id: 3, name: 'Mahi' }
//   ];
  
//   // Loop through the array of users
//   for (const user of users) {
//     // Use optional chaining to access the 'city' property
//     const city = user?.address?.city || 'Unknown';
  
//     console.log(`${user.name}'s city: ${city}`);
//   }
  

// Q11. Write a for...in loop that iterates over the properties of an object and logs each property name and value.

// const myObject = {
//     name: 'Yaseen',
//     age: 30,
//     city: 'Golimar'
//   };
  
//   // Loop through the properties of the object using for...in
//   for (const property in myObject) {
//     if (myObject.hasOwnProperty(property)) {
//       // Check if the property is a direct property of the object (not from the prototype chain)
//       console.log(`${property}: ${myObject[property]}`);
//     }
//   }

// Q12. Explain the use of the break and continue statements within loops. Provide scenarios where each might be used.

// Find the first occurrence of a specific value in an array
// const numbers = [10, 20, 30, 40, 50];

// const targetValue = 30;
// let found = false;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === targetValue) {
//     found = true;
//     break; // Exit the loop once the target value is found
//   }
// }

// console.log(found ? "Value found!" : "Value not found.");


// Skip even numbers in an array and only process odd numbers
// const integer = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < integer.length; i++) {
//   if (integer[i] % 2 === 0) {
//     continue; // Skip the processing for even numbers
//   }
//   console.log(`Processing odd number: ${integer[i]}`);
// }

  
// Q13. Write a function calculateTax that calculates and returns the tax amount based on a given income. Use a ternary operator to determine the tax rate.

// function calculateTax(income) {
//     // Use a ternary operator to determine the tax rate based on income
//     const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;
  
//     // Calculate and return the tax amount
//     const taxAmount = income * taxRate;
//     return taxAmount;
//   }
  
//   // Example usage:
//   const income1 = 45000;
//   const tax1 = calculateTax(income1);
//   console.log(`Tax for income ${income1}: $${tax1}`);
  
//   const income2 = 75000;
//   const tax2 = calculateTax(income2);
//   console.log(`Tax for income ${income2}: $${tax2}`);
  
//   const income3 = 120000;
//   const tax3 = calculateTax(income3);
//   console.log(`Tax for income ${income3}: $${tax3}`);



// Q14. Create an object car with properties make, model, and a method startEngine that logs a message. Instantiate the object and call the method.
  
// Define the car object
// const car = {
//     make: "Toyota",
//     model: "Corrolla",
//     startEngine: function() {
//       console.log("Engine started. FIRE FIRE!");
//     }
//   };
  
  // Instantiate the object and call the method
 // car.startEngine();
  

// Q15. Explain the differences between regular functions and arrow functions in terms of scope, this binding, and their use as methods.

// Regular Function
function regularFunction() {
    console.log("Regular Function - this:", this);
  }
  
  // Arrow Function
  const arrowFunction = () => {
    console.log("Arrow Function - this:", this);
  };
  
  const obj = {
    regularMethod: regularFunction,
    arrowMethod: arrowFunction
  };
  
  // Invoke methods
  obj.regularMethod(); // Regular Function - this: obj
  obj.arrowMethod();   // Arrow Function - this: window (or global object in non-strict mode)
  