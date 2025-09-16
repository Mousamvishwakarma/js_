function setusername(username){
    this.username = username 
    console.log("called");
    
}
function createuser(username , password, email){
    setusername.call(username)
    this.email = email
    this.password = password
    // this.username = username
}

const chai = new createuser("mousam", "123456","mousam2005@gmail.com")
console.log(chai);

