//function to extract a specified number of characters from a string.

function truncate_string(str, length) {
    if ((typeof str === "string") && (length > 0)) {
        return str.slice(0, length)
    }
}
console.log(truncate_string("Robin Singh", 4));
console.log(truncate_string("Vinoth Kumar", 4));