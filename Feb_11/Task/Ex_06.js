// 6.Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(email) {
    var splitPoint, firstPart, lastPart, meanValue;
    splitPoint = email.split("@");
    firstPart = splitPoint[0];
    lastPart = splitPoint[1];
    meanValue = firstPart.length / 2
    firstPart = firstPart.substring(0, firstPart.length - meanValue)
    return firstPart + "...@" + lastPart;

}
console.log(protect_email("Abinesh.vel@example.com"));