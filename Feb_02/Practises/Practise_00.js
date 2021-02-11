// //normal variables 
// var a = 'vinoth';
// var b = 'kumar';
// console.log(a, b);
// //object type
// var personalDetails = {
//     firstName: "vinoth",
//     lastName: "kumar",
//     age: 26,
//     native: "tirunelveli"
// };

// console.log(personalDetails.age);
// //array type
// var biodata = [
//     "vinoth",
//     "kumar",
//     26,
//     "tirunelveli"
// ];
// console.log(biodata[3].length);
// //for loop type with array
// for (var i = 0; i < biodata.length; i++) {
//     console.log(biodata[i]);
// }
// //string slice type

// var txt = "I can eat bananas all day";
// var x = txt.slice(10, 17);

// //array type
// var employeeDetails = [
//     "vinoth",
//     "kumar",
//     26,
//     "tirunelveli"
// ];
// console.log(employeeDetails[3]);
// //string delete type
// var fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();
// //function in object type
// var myObject = {
//     firstName: "Vinoth",
//     lastName: "Kumar",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// console.log(myObject.lastName);
// console.log(myObject.fullName())

// //function type
// function fun(s, v) {
//     return (s + v)
// }
// fun(5, 10);
// console.log(fun(5, 10));

// //function in array type
// var carDetails = [
//     "Audi",
//     "A6",
//     2020,
//     fullName = function() {
//         return "Audi" + " " + "A6";
//     }
// ]
// console.log(carDetails[2]);
// console.log(carDetails[0]);
// console.log(carDetails[3]());

// //function callback type

// function add1(a, cb) {
//     console.log(a[0].num + cb)
// }

// function add2(b) {
//     return 10;
// }
// add1([{ num: 20 }], add2())



// function add1(a, cb) {
//     console.log(a[0].num + cb);
// }

// function add2(b) {
//     return 10;
// }
// add1([{ num: 20 }], add2())

// //empty object type

// var vinoObj = {}

// vinoObj.name = "Vinoth Kumar"
// vinoObj.school = "rose mary"
// vinoObj.age = 19

// console.log(vinoObj);
// console.log(vinoObj.age);

// //looping type

// var i;
// for (i = 0; i <= 100; i = i + 5) {
//     console.log(i);
// }


// var i = 0;

// while (i <= 100) {
//     console.log(i);
//     i = i + 5;
// }
// //object type

// var vinothObj = {
//     Name: "vinoth",
//     age: 26,
//     native: "tirunelveli",
//     state: "tamil nadu",
//     country: "india",
//     pincode: 627011.
// }

// console.log(vinothObj.state, vinothObj.pincode);

// //object in array type

// var vinothArr = [{
//     name: "vinoth",
//     age: 26,
//     native: "tirunelveli",
//     state: "tamil nadu",
//     country: "india",
//     pincode: 627011.
// }]

// console.log(vinothArr[0])

// //array in object type
// var senuObj = {
//     name: ["vinoth", "umar", "saravana"],
//     age: [26],
//     native: ["tirunelveli"],
//     state: ["tamil nadu"],
//     country: ["india"],
//     pincode: [627011]
// }
// console.log(senuObj.name);
// console.log(senuObj.name[0]);
// console.log(senuObj.age, senuObj.country, senuObj.pincode);
// console.log(senuObj.age[0],  senuObj.country[0],  senuObj.pincode[0]);

// //for looping array
// var vinothArr = [
//     "vinoth",
//     26,
//     "tirunelveli",
//     "tamil nadu",
//     "india",
//     627011.
// ]
// console.log(vinothArr.length);
// for (i = 0; i < vinothArr.length; i = i + 1) {
//     console.log(vinothArr[i]);
// }


// //for looping object

// var vinothObj = {
//     name: "vinoth",
//     age: 26,
//     native: "tirunelveli",
//     state: "tamil nadu",
//     country: "india",
//     pincode: 627011.
// }
// console.log(vinothObj);
// for (var property in vinothObj) {
//     console.log(property.length);
//     console.log(vinothObj[property]);
// }


// //array of objects

// var details = [{
//         name: "Vinoth Kumar",
//         age: 27,
//         native: "Chennai"
//     },
//     {
//         name: "Mohamed Umar",
//         age: 27,
//         native: "Chennai"
//     },
//     {
//         name: "Saravana Kumar",
//         age: 27,
//         native: "Erode"
//     },
//     {
//         name: "Abinesh Vel",
//         age: 27,
//         native: "Dindigul"
//     },
//     {
//         name: "Dhanu Chandran",
//         age: 27,
//         native: "Dubai"
//     },
//     {
//         name: "Bala Vigneshwaran",
//         age: 27,
//         native: "Kanchipuram"
//     },
// ]

// console.log(details[0].name, details[2].age, details[4].native);


// //objects of array

// var infromations = {
//     arr: [{
//             name: "Vinoth Kumar",
//             age: 27,
//             native: "Chennai"
//         },
//         {
//             name: "Mohamed Umar",
//             age: 27,
//             native: "Chennai"
//         },
//         {
//             name: "Saravana Kumar",
//             age: 27,
//             native: "Erode"
//         },
//         {
//             name: "Abinesh Vel",
//             age: 27,
//             native: "Dindigul"
//         },
//         {
//             name: "Dhanu Chandran",
//             age: 27,
//             native: "Dubai"
//         },
//         {
//             name: "Bala Vigneshwaran",
//             age: 27,
//             native: "Kanchipuram"
//         },
//     ]
// }

// console.log(infromations.arr[0].name);

// //check whether an `input` is a string or not

// function is_string(input) {
//     if (typeof input === "string") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(is_string('w3resource'));
// console.log(is_string([1, 2, 4, 0]));


// //whether a string is blank or not. 

// function is_Blank(str) {
//     if (str.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// //function to split a string and convert it into an array of words.

// function string_to_array(value) {
//     var splits = value.split(' ')
//     return splits
// }
// console.log(string_to_array("Robin Singh"));


// //function to convert a string in abbreviated form. 

// function abbrev_name(value) {
//     var splits = value.split(' ')
//     var name = splits[0]
//     name = name + " " + splits[1][0]
//     return name
// }
// console.log(abbrev_name("Robin Singh"));

// //function to extract a specified number of characters from a string.

// function truncate_string(str, length) {
//     if ((typeof str === "string") && (length > 0)) {
//         return str.slice(0, length)
//     }
// }
// console.log(truncate_string("Robin Singh", 4));
// console.log(truncate_string("Vinoth Kumar", 4));



// //function to check whether an `input` is an array or not. 

// var is_array = function(value) {
//     if (toString.call(value) === "[object Array]")
//         return true;
//     else {
//         return false;
//     }

// };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));



// // function to clone an array.

// var array_Clone = function(value) {
//     return value.slice(0);
// };


// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


// // function to check whether an `input` is an array or not. 

// var is_array = function(value) {
//     if (toString.call(value) === "[object Array]")
//         return true;
//     else {
//         return false;
//     }

// };
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


// // JavaScript function to clone an array.

// var array_Clone = function(value) {
//     return value.slice(0);
// };


// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


// // function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 

// var first = function(arr, n) {
//     if (arr == null)
//         return void 0;
//     if (n == null)
//         return arr[0];
//     if (n < 0)
//         return [];
//     return arr.slice(0, n);
// };

// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));


// // function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// var last = function(arr, n) {
//     if (arr == null)
//         return void 0;
//     if (n == null)
//         return arr[arr.length - 1];
//     return arr.slice(Math.max(arr.length - n, 0));
// };

// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));


// //JavaScript program to join all elements of the following array into a string. 

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));


// // JavaScript program to sort the items of an array. 

// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// var arr2 = [];
// var min = arr1[0];
// var pos;
// var max = arr1[0];
// for (i = 0; i < arr1.length; i++) {
//     if (max < arr1[i]) max = arr1[i];
// }

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr1.length; j++) {
//         if (arr1[j] != "x") {
//             if (min > arr1[j]) {
//                 min = arr1[j];
//                 pos = j;
//             }
//         }
//     }
//     arr2[i] = min;
//     arr1[pos] = "x";
//     min = max;
// }
// console.log(arr2);


// // JavaScript program to find the most frequent item of an array. 

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var ab = 1;
// var cd = 0;
// var item;
// for (var i = 0; i < arr1.length; i++) {
//     for (var j = i; j < arr1.length; j++) {
//         if (arr1[i] == arr1[j])
//             cd++;
//         if (ab < cd) {
//             ab = cd;
//             item = arr1[i];
//         }
//     }
//     cd = 0;
// }
// console.log(item + " ( " + ab + " times ) ");


// // JavaScript program which prints the elements of the following array. 

// var a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];

// for (var i in a) {
//     console.log("row " + i);
//     for (var j in a[i]) {
//         console.log(" " + a[i][j]);
//     }
// }



// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function myFilter(arr, callback) {
//     var resultArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var result = callback(arr[i], i, arr);
//         if (result) {
//             resultArr.push(arr[i])

//         }

//         return resultArr;
//     }
// }
// var output = myFilter(arr, function(input) {
//     return input < 5
// })

// console.log(output);


// 50/100 pass 

// function getResult(marks1, marks2, grade, failgrade) {
//     var result;
//     if (marks1 > marks2) {
//         result = grade;
//     } else {
//         result = failgrade;
//     }
//     return result;
// }
// var finalResult = getResult(56, 50, "pass", "fail");
// console.log(finalResult);
// console.log(getResult(50, 60, "A", "fail"));

array = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

function multiplesOf10(arr, callback) {
    var arrayArr = [];
    var result;
    for (i = 0; i < array.length; i++); {
        var value = callback(arr[i], i, arr);
        if (value) {
            return arrayArr.push[i];
        }
    }
    return arrayArr;
}
var output = multiplesOf10(array, function(input) {
    return input < 100;
})
console.log(output)