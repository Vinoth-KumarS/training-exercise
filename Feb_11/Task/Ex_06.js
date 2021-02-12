// 6.Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"


function protectEmail(input) {
    var chars = email.split("@");
    var firstChar = chars[0];
    var part = firstChar.length / 2,
        firstChar = firstChar.substring(0, (firstChar.length - part));
    var secondChar = chars[1];
    console.log(firstChar + "..." + secondChar)

}

var email = "robin_singh@example.com";
protectEmail(email);