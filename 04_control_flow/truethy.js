const userEail = "mousam@google.com"

if (userEail){
    console.log("got the useremail");
}else{
    console.log("don't have user email");
}

// Array of empty
const myarray = []

if(myarray.length === 0 ){
    console.log("Array is empty");
}

// object check empty or not 
const myObj = {}

if(Object.keys(myObj).length === 0 ){
    console.log("obj is empty");
}

// nullish coalescing opretor (??):

let val1 ;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = " " ?? 10
val1 = undefined ?? 10
val1 = null ?? undefined ?? " " ?? 11 ?? 15/

console.log(val1);

// terniary Op
// condition ? true : false 

const IceteaPrice = 100
IceteaPrice >=  850 ? console.log("less trhan 70"): console.log("more thann");


