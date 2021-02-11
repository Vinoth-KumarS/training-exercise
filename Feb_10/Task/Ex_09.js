// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));


capitalize = function(input) {

    return input.charAt().toUpperCase() + input.slice(1);
}
console.log(capitalize('js string exercises'));