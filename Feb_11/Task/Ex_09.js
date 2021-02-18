// 9. Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));


// capitalize = function(input) {

//     return input.charAt().toUpperCase() + input.slice(1);
// }
// console.log(capitalize('js string exercises'));

function capitalize(input) {
    const words = input.split(" ");
    let capitalizeFirstLetter = "";
    const chars = words.forEach(function(str) {
        capitalizeFirstLetter += str[0].toUpperCase() + str.slice(1) + " "
    })
    return capitalizeFirstLetter;


}
console.log(capitalize('js string exercises'));