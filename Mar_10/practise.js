var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function oddNumbers(arr, cb) {
    var arrResult = []
    for (var i = 0; i < arr.length; i++) {
        cbResult = cb(arr[i])
        if (cbResult) {
            arrResult.push(cbResult)
        }
    }
    return arrResult

}
var result = (oddNumbers(numbers, function(num) {
    return num < 7
}))

// console.log(result)

var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function greaterthan7(arr) {
    var arrResult = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 7) {
            arrResult.push(arr[i])
        }

    }
    return arrResult
}
// console.log(greaterthan7(numbers1))

var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function greaterthan7(arr) {
    return arr * 2
}


var result = numbers2.map(greaterthan7)
console.log(result)