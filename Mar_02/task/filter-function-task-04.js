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

// separating the active employees using foreach

function getEmployeesName1(employee) {
    var onlineLists = []

    employee.forEach(element => {

        if (element.active) {

            onlineLists.push(element.name)
        }

    });

    return onlineLists

};
// console.log(getEmployeesName1(employeeDetails))


//  separating the active employees using filter

var outputArr = employeeDetails.filter(function(emp) {
    if (emp.active == true) {
        return emp
    }
})

console.log(outputArr)