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

// need set of all names in one array using foreach

function getEmployeesName1(employee) {
    var outputArray = []

    employee.forEach(element => {
        outputArray.push(element.name)

    });

    return outputArray
};
// console.log(getEmployeesName1(employeeDetails))

// need set of all names in one array using map

var empNames = employeeDetails.map(
    employeeDetails.forEach(element => {
        return element.name

    }))




console.log(empNames)