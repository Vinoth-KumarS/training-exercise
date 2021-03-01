function welcomeMessage() {
    var name = "Vinoth";

    function onScreenMessage() {
        console.log("Welcome " + name)

    }
    onScreenMessage()
}

// welcomeMessage()

// adding two names of "Mohamed Umar"

var lastName = "Umar"

function fullName(firstName) {
    console.log(firstName + " " + lastName)
}

function nameSwap() {
    var lastName = "Mohamed"
    fullName(lastName)
}
// nameSwap()


function greetCustomer() {
    const customerName = "anchal";

    function greetingMsg() {
        console.log("Hi! " + customerName);
    }
    return greetingMsg;
}

const callingGreetCustomer = greetCustomer()

callingGreetCustomer()