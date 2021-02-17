// task given by safi

var names = ["Vinoth", "Umar", "Kumar", "Bala", "Dhanu"];

var namesList = names.map(namesFun);

function namesFun(input) {

    return "Hi " + input;

}

console.log(namesList);




//Task given by refai


function numbers(input) {
    var oddNumbers = [];
    var evenNumbers = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            evenNumbers.push(input[i]);
        } else {
            oddNumbers.push(input[i]);
        }
    }
    var NumberSet = {
        evenNumbers,
        oddNumbers,
    };

    return NumberSet;
}
console.log(numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))