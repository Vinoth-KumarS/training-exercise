// 7. Write a JavaScript function to parameterize a string. 
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

// string_parameterize = function(input) {
//     return input.trim().toLowerCase().replace().replace(" ", "-");
// };
// console.log(string_parameterize("Robin Singh from USA."));

function string_parameterize(input) {
    const words = input.split(" ");
    return words.join("-").toLowerCase();

}
console.log(string_parameterize("Robin Singh from USA."));