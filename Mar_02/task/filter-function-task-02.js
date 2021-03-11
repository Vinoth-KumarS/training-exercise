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

// age older than 25 in a single array using foreach
function employeeAges(employee) {
    var olderThan25 = []
    employee.forEach(element => {
        if (element.age > 25) {
            olderThan25.push(element)
        }

    });
    return olderThan25
}
// console.log(employeeAges(employeeDetails))

// age older than 25 in a single array using filter

var ages = employeeDetails.filter(function(emp) {
    if (emp.age > 25) {
        return emp
    }

})

console.log(olderThan25)