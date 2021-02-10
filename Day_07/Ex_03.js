// Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

Object.objsize = function(value) {
    var osize = 0,
        key;
    for (key in value) {
        if (value.hasOwnProperty(key)) osize++;
    }
    return osize;
};


var objsize = Object.objsize(student);
console.log('Size of the current object : ' + objsize);