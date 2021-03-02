const employeeDetails = [{
        name: "vinoth",
        age: 26,
        native: "tirunelveli",
        active: true

    },
    {
        name: "umar",
        age: 25,
        native: "chennai",
        active: true
    },
    {
        name: "dhanu",
        age: 28,
        native: "dubai",
        active: false
    },
    {
        name: "bala",
        age: 29,
        native: "kanchipuram",
        active: false
    }
]

// active properties in employeeDetails array when you loop using foreach

function getEmployeesName(employee) {

    var activeStatus = []


    employee.forEach(element => {

        if (element.active) {
            activeStatus.push(element)

        }

    });
    return activeStatus
}

// console.log(getEmployeesName(employeeDetails))


// active properties in employeeDetails array when you loop using filter


var activeStatus = employeeDetails.filter(function(emp) {
    if (emp.active == true) {
        return emp
    }

})

console.log(activeStatus)