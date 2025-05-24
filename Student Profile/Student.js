// Array of student objects
const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 19,
    score: 85,
    courses: ["Math", "Physics"]
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    age: 20,
    score: 90,
    courses: ["Biology", "Chemistry"]
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    age: 18,
    score: 78,
    courses: ["English", "History"]
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    age: 21,
    score: 88,
    courses: ["Computer Science", "Math"]
  },
  {
    firstName: "Emma",
    lastName: "Williams",
    age: 22,
    score: 92,
    courses: ["Economics", "Statistics"]
  }
];

// Destructuring and mapping to create a new array of descriptions
const studentDescriptions = students.map(({ firstName, lastName, age, score, courses }) => {
  return `${firstName} ${lastName} is ${age} years old and scored ${score}. They are taking: ${courses.join(", ")}`;
});

console.log("Student Descriptions with map():");
console.log(studentDescriptions);

// Using forEach to log each student's details
console.log("\nStudent Details with forEach():");
students.forEach(({ firstName, lastName, age, score, courses }, index) => {
  console.log(`Student ${index + 1}:`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Score: ${score}`);
  console.log(`Courses: ${courses.join(", ")}`);
  console.log("-------------------------");
});