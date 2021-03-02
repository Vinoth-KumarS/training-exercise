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


// set of names in a single array using foreach

function employeeNames(employee) {
    var outputArray = []
    employee.forEach(element => {

        outputArray.push(element.name)

    });
    return outputArray
}
// console.log(employeeNames(employeeDetails))

// set of names in a single array using array

var outputArray = employeeDetails.map(function(empName) {
        return empName.name
    })
    // console.log(outputArray)