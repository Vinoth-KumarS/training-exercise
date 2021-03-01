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


function employeeList(employee) {
    var activeEmployees = []
    var ageList = []
    employee.forEach(element => {
        if (element.active) {
            activeEmployees.push(element)
        }
        if (element.age > 25) {
            ageList.push(element.name)
        }

    });
    return {
        activeList: activeEmployees,
        agedPersons: ageList
    }
}
console.log(employeeList(employeeDetails))