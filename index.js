// // Write a JavaScript function to check whether an `input` is an array or
// // not.

// function checkArray(input) {
//   const name = "UserInput";
//   if (Array.isArray(input)) {
//     console.log(`${name}  is a  array"`);
//   } else {
//     console.log(`${name} is  not a array`);
//   }
// }

// let input = [2, 5, 6, 2];
// let input1 = "Hellow Man";
// let input3 = { name: "Hero", role: "Hero" };

// checkArray(input);

// /*
// Write a JavaScript program to calculate the multiplication and
// division of two numbers (input from the user).
// */
// let choice = Number(prompt(`press 1 to multiply \n press 2 to Divide`));
// let firstInput = prompt("Please enter the first number");
// let secondInput = prompt("Please enter the second number");
// let firstNum = Number(firstInput);
// let secondNum = Number(secondInput);

// function calculation(firstInput, secondInput) {
//   console.log(choice);
//   let result = 0;

//   switch (choice) {
//     case 1:
//       result = firstInput * secondInput;
//       alert(`The result of Mulitiplicatin is ${result}`);
//       break;
//     case 2:
//       result = firstInput / secondInput;
//       alert(`The result of Division is ${result}`);
//       break;
//     default:
//       break;
//   }
// }
// calculation(firstNum, secondNum);

// /*
// Write a JavaScript program to find the closest value to 100 from two
// numerical value
// */

// function closetToHundred(firstNum, secondNum) {
//   let data = 100;
//   let num1 = data - firstNum;
//   let num2 = data - secondNum;

//   const result =
//     num1 > num2 ? "Second Input is near to 100" : "First number is near to 100";
//   alert(result);
// }

// closetToHundred(firstNum, secondNum);

/*
Write a JavaScript program that creates a class called University with
properties for university name and departments. Include methods to
add a department, remove a department, and display all departments.
Create an instance of the University class and add and remove
departments.
*/
class University {
  name;
  departments = [];

  constructor(name) {
    this.name = name;
    this.departments = ["pok", "trib", "Pokhara"];
  }

  addDepartment() {
    alert(`Enter the Department name for ${this.name} university`);
  }
  //   removeDepartment() {
  //     if (this.departments.length > 0) {
  //       this.departments = this.departments.filter((list) => {
  //         list.departments === "Pokhara";
  //         console.log(this.departments);
  //       });
  //     }
  //   }

  displayDepartment() {
    this.departments.forEach((department) => {
      console.log(department);
    });
  }
}

const uni = new University("Pokhara");

uni.addDepartment();
//uni.removeDepartment();
uni.displayDepartment();

/*
5. Write a JavaScript program that displays the largest integer among
two integers.
*/
function largestInt(firstNum, secondNum) {
  let num;
  if (firstNum > secondNum) {
    num = firstNum;
  } else if (firstNum < secondNum) {
    num = secondNum;
  } else {
    num = "Both are Equal";
  }
  return num;
}

console.log("The largest number is ", largestInt(50, 75));

/*
Write a JavaScript program that iterates integers from 1 to 100. But
for multiples of three print "Fizz" instead of the number and for
multiples of five print "Buzz". For numbers multiples of both three
and five print "FizzBuzz".
*/

function printFuzz(num) {
  for (let i = 1; i <= num; i++) {
    console.log(
      "======================================",
      i,
      "=============================="
    );
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      continue;
    }

    if (i % 3 === 0) {
      console.log("Fizz");
    }
    if (i % 5 === 0) {
      console.log("Buzz");
    }
    console.log(
      "======================================",
      i,
      "=============================="
    );
  }
}

printFuzz(100);
