// JavaScript Array concat() Method
// merging two arrays

var batch1 = ["Vinoth", "Seesa", "Saravana", "Umar"]
var batch2 = ["Dhanu", "Bala", "Abinesh"]

var friends = batch1.concat(batch2)

// console.log(friends)

// JavaScript Array copyWithin() Method
var batch1 = ["Vinoth", "Seesa", "Saravana", "Umar"]

// console.log(batch1.copyWithin(2, 1))
// console.log(batch1.copyWithin(3, 0))

// JavaScript Array fill() Method

var colors = ["Orange", "Green", "Red", "Blue"]
    // console.log(colors.fill("Yellow"))

// JavaScript Array filter() Method

var ages = [12, 34, 23, 56, 17, 45, 89]

var checkAdult = ages.filter(function age(input) {
        return input >= 18
    })
    // console.log(checkAdult)