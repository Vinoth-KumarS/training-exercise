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


function getEmployeesName1(employee) {
    var outputArray = []
    var olderThan26 = []
    var activeStatus = []
    var onlineLists = []
    var offlineLists = []
    employee.forEach(element => {
        outputArray.push(element.name)
        if (element.age > 26) {
            olderThan26.push(element.age)

        }
        if (element.active) {
            activeStatus.push(element.name)
            onlineLists.push(element.name)
        }
        if (!element.active) {
            offlineLists.push(element.name)
        }
    });

    return {
        nameList: outputArray,
        ageList: olderThan26,
        activity: activeStatus,
        activePeople: { online: onlineLists, offline: offlineLists }
    }

};
console.log(getEmployeesName1(employeeDetails))