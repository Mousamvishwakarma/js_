const user = {
    username: "mmousam",
    price: 999,

    welcomeMassage: function (){
        // console.log(`${this.username} , welcome `);
        // console.log(this);
        
    }
}
// user.welcomeMassage
// user.username = "sam"
// user.welcomeMassage()

// console.log(this);


// function chai(){
//     let username = "mousam"
//     console.log(this.username);
    
// }
// chai()

const chai = () =>{
      let username = "mousam"
   console.log(this.username);
}
chai()

// const addTwo =(num1 , num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(5,8));

// const addthree = (num1 , num2) => num1 + num2 
// console.log(addthree(5,9));

const addnum = (num1 , num2) => ({username:" mousam"})
console.log(addnum(5,9));
