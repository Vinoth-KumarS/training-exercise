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