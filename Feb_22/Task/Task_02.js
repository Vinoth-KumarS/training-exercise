function Js_Dom(input) {
    const a = document.querySelector(input);
    if (a) {
        return true;
    } else {
        return false;
    }
    console.log(a);
}


console.log(Js_Dom('h1'))