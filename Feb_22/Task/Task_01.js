// Write a JavaScript function to convert an object into a list of `[key, value]` pairs ? input  { name: 'kumar ',  age: 26}  output  [ [name, kumar], [age. 26] ]

var inputObj = { name: 'kumar ', age: 26 };

function convertKeyValuePairs(input) {
    var output = [];
    for (var keys in input) {
        var z = [];
        z.push(keys, input[keys]);
        output.push(z);


    }
    return output;
}
console.log(convertKeyValuePairs(inputObj));