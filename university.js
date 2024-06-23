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

  addDepartment() {
    let dName = prompt("Enter the Department name");
    this.departments.push(dName);
  }
  removeDepartment() {}

  displayDepartment() {
    let uList = document.createElement("ul");
    this.departments.forEach((department) => {
      let li = document.createElement("li");
      li.textContent = department;
      uList.append(li);
    });
  }
}
