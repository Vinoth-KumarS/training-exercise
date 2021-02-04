//normal variables 
var a = 'vinoth';
var b = 'kumar';
console.log(a, b);
//object type
var personalDetails = {
    firstName: "vinoth",
    lastName: "kumar",
    age: 26,
    native: "tirunelveli"
};

console.log(personalDetails.age);
//array type
var biodata = [
    "vinoth",
    "kumar",
    26,
    "tirunelveli"
];
console.log(biodata[3].length);
//for loop type with array
for (var i = 0; i < biodata.length; i++) {
    console.log(biodata[i]);
}
//string slice type

var txt = "I can eat bananas all day";
var x = txt.slice(10, 17);

//array type
var employeeDetails = [
    "vinoth",
    "kumar",
    26,
    "tirunelveli"
];
console.log(employeeDetails[3]);
//string delete type
var fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
//function in object type
var myObject = {
    firstName: "Vinoth",
    lastName: "Kumar",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(myObject.lastName);
console.log(myObject.fullName())

//function type
function fun(s, v) {
    return (s + v)
}
fun(5, 10);
console.log(fun(5, 10));

//function in array type
var carDetails = [
    "Audi",
    "A6",
    2020,
    fullName = function() {
        return "Audi" + " " + "A6";
    }
]
console.log(carDetails[2]);
console.log(carDetails[0]);
console.log(carDetails[3]());

//function callback type

function add1(a, cb) {
    console.log(a[0].num + cb)
}

function add2(b) {
    return 10;
}
add1([{ num: 20 }], add2())



function add1(a, cb) {
    console.log(a[0].num + cb);
}

function add2(b) {
    return 10;
}
add1([{ num: 20 }], add2())

//empty object type

var vinoObj = {}

vinoObj.name = "Vinoth Kumar"
vinoObj.school = "rose mary"
vinoObj.age = 19

console.log(vinoObj);
console.log(vinoObj.age);

//looping type

var i;
for (i = 0; i <= 100; i = i + 5) {
    console.log(i);
}


var i = 0;

while (i <= 100) {
    console.log(i);
    i = i + 5;
}
//object type

var vinothObj = {
    Name: "vinoth",
    age: 26,
    native: "tirunelveli",
    state: "tamil nadu",
    country: "india",
    pincode: 627011.
}

console.log(vinothObj.state, vinothObj.pincode);

//object in array type

var vinothArr = [{
    name: "vinoth",
    age: 26,
    native: "tirunelveli",
    state: "tamil nadu",
    country: "india",
    pincode: 627011.
}]

console.log(vinothArr[0])

//array in object type
var senuObj = {
    name: ["vinoth", "umar", "saravana"],
    age: [26],
    native: ["tirunelveli"],
    state: ["tamil nadu"],
    country: ["india"],
    pincode: [627011]
}
console.log(senuObj.name);
console.log(senuObj.name[0]);
console.log(senuObj.age, senuObj.country, senuObj.pincode);
console.log(senuObj.age[0],  senuObj.country[0],  senuObj.pincode[0]);

//for looping array
var vinothArr = [
    "vinoth",
    26,
    "tirunelveli",
    "tamil nadu",
    "india",
    627011.
]
console.log(vinothArr.length);
for (i = 0; i < vinothArr.length; i = i + 1) {
    console.log(vinothArr[i]);
}


//for looping object

var vinothObj = {
    name: "vinoth",
    age: 26,
    native: "tirunelveli",
    state: "tamil nadu",
    country: "india",
    pincode: 627011.
}
console.log(vinothObj);
for (var property in vinothObj) {
    console.log(property.length);
    console.log(vinothObj[property]);
}