var carDetails = {
    name: ["vinoth", "kuamr", "umar", "saravana"],
    model: "A6",
    version: "2021",
    country: "India"
}

console.log(carDetails.name, carDetails.country);

var nameLists = ["vinoth", "kumar", "umar", "saravana"]

console.log(nameLists[2]);
console.log(carDetails.name[2], carDetails.version);

console.log(nameLists.pop());
console.log(nameLists.push("abinesh"));
console.log(nameLists)
console.log(nameLists.sort())
console.log(nameLists.unshift())

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.pop());

console.log(fruits.push("Pineapple"));

console.log(fruits.unshift("Lemon"));

delete fruits[2];


fruits.splice(0, 2, "pear", "guava")
console.log(fruits);