//function to convert a string in abbreviated form. 

function abbrev_name(value) {
    var splits = value.split(' ')
    var name = splits[0]
    name = name + " " + splits[1][0]
    return name
}
console.log(abbrev_name("Robin Singh"));