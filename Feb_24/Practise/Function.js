function sum(num1, num2) {
    return num1 + num2

}
// console.log(sum(20, 10));

const names = ["vinoth", "umar", "saravana", "abinesh", "dhanu", "bala", "seesa"]

function nameLists(name) {
    for (i = 0; i < name.length; i++) {
        console.log(name[i])
    }

}
// (nameLists(names))

function myFunction() {
    alert("Vinoth");
}
// console.log(myFunction());







let cars = ["BMW", "Volvo", "Mini", "skoda", "hyundai"];

function carNames(input) {
    input.forEach(element => {
        console.log(element)
    });
}
// carNames(cars)


var carDetails = {
    name: "Audi",
    model: "A6",
    year: 2021,
    cartype: "top"

}

var bookDetails = {
    name: "The Last Leaf",
    author: "Gulliver Travels",
    year: 2021
}

function details(input) {
    var output = [];
    for (keys in input) {

        output.push(keys, input[keys])


    }
    return output

}
// console.log(details(bookDetails))

const bioDetail = {
        firstName: "Vinoth",
        lastName: "Kumar",
        fullName: function() {
            return this.firstName + " " + this.lastName
        }
    }
    // console.log(bioDetail.fullName(), bioDetail.firstName)

const employeeDetails = [{
        name: "vinoth",
        age: 26,
        native: "tirunelveli"
    },
    {
        name: "umar",
        age: 25,
        native: "chennai"
    },
    {
        name: "dhanu",
        age: 28,
        native: "dubai"
    },
    {
        name: "bala",
        age: 29,
        native: "kanchipuram"
    }
]


function employees(employee) {
    var output = []
    employee.forEach(element => {
        console.log([element.name])

    });

}
// employees(employeeDetails)