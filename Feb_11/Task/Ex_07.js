// 7. Write a JavaScript function to parameterize a string. 
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

string_parameterize = function(input) {
    var words = [];
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
};
console.log(string_parameterize("Robin Singh from USA."));