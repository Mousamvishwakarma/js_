function calculateCartPrice (val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,855,7888,964));

// object
const user = {
    username: "mousam",
    price: 199
}

// function
function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price ${anyobj.price}`);
    
}
handleObject(user)

handleObject({
    username: "mousamSharma",
    price: 546
})

//Array
const mynewarray = [200,54,600]

function retirnSecondVal (getarray){
    return getarray[1]
}
console.log(retirnSecondVal([200,89879,100,89]));
