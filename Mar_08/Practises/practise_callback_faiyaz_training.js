var myObject = {
    firstName: "Vinoth",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var keyName = "lastName"

// console.log(myObject.firstName)
// console.log(myObject.keyName)


class Car {
    firstName = 'vinoth'
    age = 29
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    carModel() {
        return this.name + " " + this.year
    }
}

let myCar1 = new Car("Ford", 2014);

// console.log(myCar1.carModel())




var numbers = [10, 20, 30, 40, 50, 61, 70, 81, 90, 100]

function myFilter(arr, cb) {
    var resultArr = []
    for (var j = 0; j < arr.length; j++) {
        var cbResult = cb(arr[j])
        if (cbResult) {
            resultArr.push(cbResult[j])
        }
    }
    return resultArr
}
var outputResult = myFilter(numbers, function(number) {
        return number % 2 === 0

    })
    // console.log(outputResult)


// Exercise : write a function called "every" which takes an array and a callback(predicate). "every"  function returns true if every object inside the array satisfies the condition in the callback , false if not.

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function every(arr, cb) {
    var resultArr = []
    for (i = 0; i < arr.length; i++) {
        var cbResult = cb(arr[i])
        if (cbResult) {
            resultArr.push(cbResult)

        } else {
            return false
        }


    }
    if (resultArr.length = arr.length) {
        return true
    }

}
var result = every(numbers, function(num) {

        return num % 2 === 0
    })
    // console.log(result)






var ages = [{ age: 10 }, { age: 21 }, { age: 30 }, { age: 40 }, { age: 50 }, { age: 60 }, { age: 70 }, { age: 80 }, { age: 90 }, { age: 100 }]

function every(arr, cb) {
    var arrResult = []
    for (var i = 0; i < arr.length; i++) {
        var cbResult = cb(arr[i].age)
        if (cbResult) {
            arrResult.push(cbResult)
        } else {
            return false
        }
    }
    if (arrResult.length = arr.length) {
        return true
    }

}
var result = every(ages, function(checkAge) {
    return checkAge % 2 === 0
})

console.log(result)