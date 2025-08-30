function sayMyName() {
    // console.log("hello world! ");

}
sayMyName()

// function addTwonumber(number1, number2){
// console.log( number1 + number2);
// }

function addTwonumber(number1, number2) {
    let result = number1 + number2

    return result

}
const result = addTwonumber(8, 5)
//  console.log("result: " + result);

function loggedInMassage(username) {
    if (!username) {
        console.log(
            "please enter a username");
    }
    return `${username} just logged in here `
}
// console.log(loggedInMassage("mousam"));
console.log(loggedInMassage("mousam"))