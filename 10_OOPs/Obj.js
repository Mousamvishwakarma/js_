

const  user = {
    usename: " mousam",
    loginCount: 5,
    signedIn: true,

    getUserD: function(){
        // console.log(" Got user details");
        // console.log(`username ${this.username}`);
        console.log(this);
        
    }
}
console.log(user.usename);
// console.log(user.getUserD);
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }


