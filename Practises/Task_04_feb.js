//check whether an `input` is a string or not

function is_string(input) {
    if (typeof input === "string") {
        return true;
    } else {
        return false;
    }
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


//whether a string is blank or not. 

function is_Blank(str) {
    if (str.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

//function to split a string and convert it into an array of words.

function string_to_array(value) {
    var splits = value.split(' ')
    return splits
}
console.log(string_to_array("Robin Singh"));


//function to convert a string in abbreviated form. 

function abbrev_name(value) {
    var splits = value.split(' ')
    var name = splits[0]
    name = name + " " + splits[1][0]
    return name
}
console.log(abbrev_name("Robin Singh"));

//function to extract a specified number of characters from a string.

function truncate_string(str, length) {
    if ((typeof str === "string") && (length > 0)) {
        return str.slice(0, length)
    }
}
console.log(truncate_string("Robin Singh", 4));