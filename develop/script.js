// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  

  const employeesArray = [];

  let enterData = true;

  while(enterData) {
    // Ask user to input first name
    let firstName = window.prompt("Enter first name:");

    // Ask user to input last name
    let lastName = window.prompt("Enter last name:");

    // Ask user to input salary
    let salary = window.prompt("Enter salary:");

    // If the data entered is not a number, return $0
    if (isNaN(salary)) {
      salary = 0;
    }

    employeesArray.push({
      firstName,
      lastName,
      salary
    })

    enterData = window.confirm("Do you want to add another employee?")
  }
  console.log(employeesArray);
  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let sum = 0;

  // A for loop will sum the salary values the user entered
  for(let i = 0; i < employeesArray.length; i++) {
  sum += Number(employeesArray[i].salary);
  }

  // Then, calculate the average of those numbers
  const average = sum / employeesArray.length;

  // Display the average in the console log
  console.log(`The average employee salary between our ${employeesArray.length}
  employee(s) is ${average}.`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();
  console.log(employees)

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);