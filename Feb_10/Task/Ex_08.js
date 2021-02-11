// 8. Write a JavaScript function to capitalize the first letter of a string. 
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

capitalize = function(input) {

    return input.charAt(0).toUpperCase() + input.slice(1);
}
console.log(capitalize('js string exercises'));