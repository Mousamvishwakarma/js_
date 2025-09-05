// for loop 
for (let i = 0; i <=10 ; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
        
    }
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    
for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop  value : ${j} and inner loop ${i}`);
    console.log(i + ' * ' + j +  ' = ' + i*j);
}    
}


let  myarray = ["superman "," batman", "human"]
console.log(myarray.length);

for (let index = 0; index <= myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}

// Bracks controlFlow
for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log("DEtected 5");
        break
    }
    console.log(`value of i is ${i}`);
}


// continue controlflow
for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log("DEtected 5");
        continue
    }
    console.log(`value of i is ${i}`);
}