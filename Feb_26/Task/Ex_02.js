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






function employeeList(input) {
    const activeStatus = []
    input.filter(function(emp) {
        emp.active == true
        activeStatus.push(emp.active)
    })
    return input
}
console.log(employeeList(employeeDetails))