// if operations 

const balance = 1100
if (balance > 100) {
    console.log(`balance is less than ${balance }`);  
}


if (balance < 500) {
    console.log(`balnce is greate 500`);
    
}else if(balance < 750){
    console.log(`less than 750`);
}else if(balance < 900){
    console.log("less than 750");
    
}else{
    console.log("less than 1200");
    

}
if (balance > 1200){
    console.log(" greater than 1200");
    
}
else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
 const debitCard = true
 const LoggedInFromeGoogle = true
 const LoggedInEmail =  true

 if(userLoggedIn && debitCard ){
    console.log("` allow to buy course`");
    
 }
 if(LoggedInEmail || LoggedInFromeGoogle){
    console.log("user Loggedink");
    
 }

