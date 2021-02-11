var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function myFilter(arr, callback) {
    var resultArr = []
    for (var i = 0; i < arr.length; i++) {
        var result = callback(arr[i], i, arr);
        if (result) {
            resultArr.push(arr[i])

        }

    }
    return resultArr;
}
var output = myFilter(arr, function(input) {
    return input < 7
})

console.log(output);