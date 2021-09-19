// // Q1: Ternary Operator. What will the code below output?

const price = 30;
const message = `This item is ${price >= 30 ? "too expensive!" : "affordable"}`;

console.log(message);

// // Q2: Ternary Operator. Write a conditional statement (using a ternary operator) to update the drivingStatus property of the person object to "legal" if the person's age is greater than or equal to 16, or "non-legal" otherwise.

const person = {
  name: "Hou",
  age: 33,
  drivingStatus: null,
};

// // Q3: Spread. Make a copy of the numbers array below with the spread syntax. The copy should have some additional elements at the front and back of the array.
const numbers = [1, 2, 3, 4, 5];

// // solution here
let newNumbers;

console.log(newNumbers); // should output ["a", 1, 2, 3, 4, 5, "b"]

// // Q4: Use the spread operator to clone the title and city properties from the instructor object into the newInstructor object. Override the values of firstName and lastName with "Jane" and "Random" respectively.
const instructor = {
  firstName: "John",
  lastName: "Doe",
  title: "instructor",
  city: "Miami, FL",
};

const newInstructor = {
  // your solution here
};

console.log(newInstructor); // should output { firstName: "Jane", lastName: "Random", title: "instructor", city: "Miami, FL" }

// Q5: What will be logged to the console? Why? How would you fix it?

const student = {
  firstName: "Hou",
  lastName: "Chia",
  title: "student",
  location: {
    city: "Cleveland",
    state: "OH",
    zipcode: 44114,
  },
};

const studentClone = {
  ...student,
  firstName: "HouClone",
  lastName: "ChiaClone",
};

studentClone.location.city = "Miami";

console.log({ student, studentClone });
