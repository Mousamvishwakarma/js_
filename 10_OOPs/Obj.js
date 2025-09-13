

const  user = {
    usename: " mousam",
    loginCount: 5,
    signedIn: true,

    getUserD: function(){
        // console.log(" Got user details");
        console.log(`username ${this.username}`);
        
    }
}
console.log(user.usename);
console.log(user.getUserD);


